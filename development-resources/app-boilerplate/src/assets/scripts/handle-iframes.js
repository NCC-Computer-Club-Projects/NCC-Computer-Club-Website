// confirm iframe is loaded in document
export function confirmAccess(iframe, queryId, index = undefined) {
  return new Promise((resolve, reject) => {
    console.group(`Confirming iframe accessibility...`);
    // begin constructing load status string
    let confirmContentString = "iframe";
    
    // add index value to string
    if (index >= 0) 
      confirmContentString += ` [${index}]`;
    
    // choose most unique iframe identifier
    if (iframe.title) // select title
        confirmContentString += ` "${iframe.title.toUpperCase()}"`;
      else if (iframe.id) // select id
        confirmContentString += ` #${iframe.id.toUpperCase()}`;
      else if (iframe.className) // select class name
        confirmContentString += ` .${iframe.className.toUpperCase()}`;
      else // select src
        confirmContentString += ` ${iframe.src.toUpperCase()}`;
    
    // add query id to string
    if(queryId)
      confirmContentString += ` from query ${queryId}`;
   
    // finish constructing string
    confirmContentString += "; Content loaded:";

    // log iframe identifier and load status
    console.log(confirmContentString);
    // log iframe(s)
    console.dir(iframe);

    let iframeDataObj = {
      window: iframe.contentWindow,
      title: iframe.title,
      id: iframe.id,
      class: iframe.className,
      src: iframe.src,
      document: undefined,
      this: iframe
    };
    
    try {
      iframeDataObj.document = iframe.contentWindow.document
      console.log(`Document access granted`);
      resolve(iframeDataObj);
    } catch(error) {
      console.log(`Document access denied`);
      reject(iframeDataObj);
    }
  console.groupEnd();
  });
}

export default function fetchIframes(query) {
  try {
    const queryId = Math.floor(Math.random() * Date.now());
    // fetch iframes from query string
    const iframeNodes = document.querySelectorAll(query);
    // convert nodelist to array
    let iframeSelection = {nodes: Array.prototype.slice.call(iframeNodes), type: 'array'};

    // evaluate selection size
    if (iframeSelection.nodes.length == 0) {
      throw new Error('Iframe query not found');
    } else if (iframeSelection.nodes.length == 1) {
      // if only one frame is present convert selection to single a node
      iframeSelection.nodes = iframeSelection.nodes[0];
      // update type
      iframeSelection.type = 'node';
    } 
    
    // confirm selection is iframe
    if (iframeSelection.type == 'array') {
      for (const node of iframeSelection.nodes) {
        if (node.tagName != 'IFRAME') 
          throw new Error('Selection contains non-iframes');
      }
    } else if (iframeSelection.type == 'node') {
      if (iframeSelection.nodes.tagName != 'IFRAME')
        throw new Error('Selection contains non-iframe');
    } 
    
    console.log(`Caught iframes at ${queryId}:\n`, iframeSelection);
    return {iframeSelection, queryId};
  } catch(error) {
    console.log(error);
  }
}

export async function returnDataObject(node, queryId, index) {
  try {
    const dataObj = await confirmAccess(node, queryId, index);
    return dataObj;
  } catch(incompleteData) {
    return incompleteData;
  }
}

export async function storeIframeData(...iframeQueryFetchObj) {
  // set up global iframe data array
  if (globalThis.globalIframeData == undefined) {
    globalThis.globalIframeData = [];
    console.log('Created global variable: `globalIframeData` array');  
  }
  
  // set up onload events to store data in array
  for (const fetchObj of iframeQueryFetchObj) {
    try {
      if (fetchObj.iframeSelection.type == 'array') { // selection is array
        fetchObj.iframeSelection.nodes.forEach((node, index) => {
          node.addEventListener('load', async () => {
            if (node.objectAdded == undefined) {
              const iframeData = await returnDataObject(node, fetchObj.queryId, index);
              globalIframeData.push(iframeData);
              node.objectAdded = true;
            }
          });
        });
      } else if (fetchObj.iframeSelection.type == 'node') { // selection is a node
        const node = fetchObj.iframeSelection.nodes;
        node.addEventListener('load', async () => {
          if (node.objectAdded == undefined) {
            const iframeData = await returnDataObject(node, fetchObj.queryId, index);
            globalIframeData.push(iframeData);
            node.objectAdded = true;
          }
        });
      }
    } catch(error) {
      console.log(error)
      console.warn('Make sure to use `storeIframeData( fetchIframes(query) )`');
    }
  }
}

export function setCommunication(topWindow, approvedOrigins) {
  // configure top window to recieve messages from iframes
  if (!topWindow.hasMessageListener) {
    topWindow.addEventListener('message', (event) => {
      if (approvedOrigins.findIndex(origin => origin == event.origin) < 0) {
      return;
      } 
      console.log(JSON.parse(event.data));
    });
    topWindow.hasMessageListener = true;
    console.log(`Set message listener on ${topWindow.origin}`);
  }
}