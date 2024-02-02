export default class KeyList {
  #keys = {};
  #numKeys = 0;
  constructor(newList = []) {
    newList.forEach(definedKey => this.#ammendList(definedKey));
  }

  get list() {
    return this.#keys;
  }

  get size() {
    return this.#numKeys;
  }

  #ammendList(newKey) {
    this.#keys[newKey] = {
      instances: [newKey],
      count: 1
    };
    this.#numKeys++;
  }

  #toHex(value) {
    let hexArr = [];
    let remainders = [];
    let power = 0;
    let bit;
    let divisor;
    let hexStr = '';
    const exponentOf16Divisor = () => {
      let exponentOf16 = 16 ** power;
      while (value > exponentOf16) { exponentOf16 = 16 ** ++power; } 
      power--;
      exponentOf16 = 16 ** power--;
      return exponentOf16;
    };
    do {
      divisor = exponentOf16Divisor();
      bit = Math.floor(value / divisor);
      bit >= 1 ? hexArr.push(bit) : hexArr.push(value % divisor);
      value = value % divisor;
      
      remainders.push(value);
    } while (value > 0);
  
    hexArr.forEach(hex => {
      switch (hex) {
        case 10: hexStr += 'a'; break;
        case 11: hexStr += 'b'; break;
        case 12: hexStr += 'c'; break;
        case 13: hexStr += 'd'; break;
        case 14: hexStr += 'e'; break;
        case 15: hexStr += 'f'; break;
        default: hexStr += hex.toString();
      }
    });
    return hexStr;
  }

  #unicodeKey(repeatKey) {
    const unicodeSeq = repeatKey.split('').reduce((intStr, ch) => intStr + ch.codePointAt(0).toString(), '');
    return Number(unicodeSeq);
  }

  generateKey(unique) {
    unique = unique.toString();
    const exists = this.#keys[unique] ? true : false;
    if (!exists) {
      this.#ammendList(unique);
      return unique;
    } else {
      const unicode = this.#unicodeKey(unique) * ++this.#keys[unique].count;
      const modifiedRepeatKey = unique + '#' + this.#toHex(unicode);

      this.#keys[unique].instances.push(modifiedRepeatKey);
      return modifiedRepeatKey; 
    }
  }
}