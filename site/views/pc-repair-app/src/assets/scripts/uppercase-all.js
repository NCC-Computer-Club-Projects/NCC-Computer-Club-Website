export default function upperCaseAll(str) {
  const spaceLetter = /\s\w{1}/g;
  const dashLetter = /-\w{1}/g;

  const regex = [
    {
      pattern: dashLetter,
      replacement: match => '-' + match[1].toUpperCase()
    },
    {
      pattern: spaceLetter,
      replacement: match => ' ' + match[1].toUpperCase()
    }
  ];

  let newStr = str.replace(str[0], str[0].toUpperCase()); // capitalize first letter

  // test all regular expressions
  let transformed = false;
  regex.forEach((obj) => {
    // console.log(`testing ${newStr} against`, obj);
    const { pattern, replacement } = obj;
    if (pattern.test(newStr) && !transformed) {
      /*
      // display matches
      const matches = newStr.match(pattern);
      console.log(matches);
      */
      newStr = newStr.replaceAll(pattern, replacement);
      transformed = true;
    }
  });

  return newStr;
}