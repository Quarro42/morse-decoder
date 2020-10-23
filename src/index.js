const { strikethrough } = require("colors");

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    
  let decArray = [];
  let morseArray = [];
  let resultStr = '';

  for (let i = 0; i < expr.length; i = i + 10) {
    let currentArrElem = expr.slice(i, i + 10);
    decArray.push(currentArrElem)
  }

  for (let j = 0; j < decArray.length; j++) {
    let currentArrElem = decArray[j].slice(decArray[j].indexOf(1));
    let morseSymbol = '';
    for (let m = 0; m < currentArrElem.length; m = m + 2) {
      let encodedSymbol = currentArrElem.slice(m, m + 2);
      if (encodedSymbol === '10') {
        encodedSymbol = '.';
        morseSymbol += encodedSymbol;
      } else if (encodedSymbol === '11') {
        encodedSymbol = '-';
        morseSymbol += encodedSymbol;
      } else {
        morseArray.push(' ');
      }
    }
    morseSymbol && morseArray.push(morseSymbol);
  }

  for (let i = 0; i < morseArray.length; i++) {
resultStr = morseArray[i] !== ' ' ? resultStr + MORSE_TABLE[morseArray[i]] : resultStr + ' '; 
 }
  return resultStr;
}

module.exports = {
    decode
}