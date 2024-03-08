/**
 * Return the camel cased name of a webpack context module key
 * @param {*} path 
 * @param {*} extList 
 * @param {*} pascalCase 
 * @returns 
 */

export default function camelCaseContext(path, extList = ['png','jpeg','jpg','svg','gif','tiff','raw'], pascalCase = false) { 
  let extRegexStr = extList.reduce((str, ext) => str + ext + '|','\\.(');
  extRegexStr = extRegexStr.replace(/\|$/, '');
  extRegexStr += ')$';
  
  const imgRegex = new RegExp(extRegexStr, 'gi'); // capture image extention
  const pathRegex = /.*\//; // capture path
  const wordBreakRegex = /-\w/g; // capture word break
  
  // retrieve file name without path and extension
  const pathMatch = path.match(pathRegex);
  const extMatch = path.match(imgRegex);
  let casedFileName = path.replace(pathMatch, '').replace(extMatch, ''); 

  if (pascalCase) casedFileName = casedFileName.replace(casedFileName[0], casedFileName[0].toUpperCase());
  const fileStr = casedFileName.replace(/-/g, ' ');
  
  const wordBreaks = casedFileName.match(wordBreakRegex); // return an array of hyphenated chars
  if (wordBreaks) { // process file name if hyphens exist
    // Create an array from the hyphenated chars. 
    // Replace with capital chars and erase hyphens.
    const replacements = wordBreaks.map(letter => letter.replace(letter, letter[1].toUpperCase()));
    let replacementIdx = 0; // track next letter to replace
    
    // replace hyphenated instances with capital chars
    for (let i = 0; i < casedFileName.length - 1; i++) { 
      const testSubStr = casedFileName[i] + casedFileName[i + 1]; // analyze a pair of chars
      if (wordBreakRegex.test(testSubStr)) {
        // modify file name
        casedFileName = casedFileName.replace(testSubStr, replacements[replacementIdx++]);
      }
    }
  }
  return {casedFileName, fileStr};
}