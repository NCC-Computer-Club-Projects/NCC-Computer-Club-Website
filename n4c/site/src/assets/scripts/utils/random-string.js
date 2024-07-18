export default function randomString(length) {
  let string = ''; 
  for (let strIdx = 1; strIdx <= length; strIdx++) {
    let hexCharArr = '0xffef00'; // first 16 bits for word characters
    for (let chBit = 1; chBit <= 2; chBit++) {
      const maxDigit = chBit === 1 ? 7 : 14; // first digit max is 7, second is e
      const minDigit = chBit === 1 ? 2 : 1; // first digit min is 2, second is 1
      let randomHexDigit = Math.floor(Math.random() * (maxDigit + 1)); // int from 0 - 14 (word characters)
      if (randomHexDigit < minDigit) randomHexDigit += minDigit; // set digit to min if below min
      
      randomHexDigit = randomHexDigit.toString() // convert to string
      
      switch (randomHexDigit) {
        case '10':
          randomHexDigit = 'a';
          break;
        case '11':
          randomHexDigit = 'b';
          break;
        case '12':
          randomHexDigit = 'c';
          break;
        case '13':
          randomHexDigit = 'd';
          break;
        case '14':
          randomHexDigit = 'e';
          break;
      }
      hexCharArr += randomHexDigit;
    }
    string += String.fromCharCode(Number(hexCharArr)); // add char to string
  }
  return string;
}