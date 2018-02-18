function changeVocals (str) {
  let hasil = '';
  for (var i = 0; i < str.length; i++) {
    let strToNum = (str[i].charCodeAt(0) - 97)+1;
    hasil += String.fromCharCode(97 + strToNum);
  }
  return hasil;
}

function reverseWord (str) {
  let hasil = '';
  for (var i = str.length - 1; i >= 0; i--) {
    hasil += str[i];
  }
  return hasil;
}

function setLowerUpperCase (str) {
  let hasil = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      hasil += str[i].toLowerCase()
    } else {
      hasil += str[i].toUpperCase()
    }
  }
  return hasil;
}

function removeSpaces (str) {
  let hasil = '';
  let splitStr = str.split('!');
  for (var i = 0; i < splitStr.length; i++) {
    hasil += splitStr[i];
  }
  return hasil;
}

function passwordGenerator (name) {
  if (name.length >= 5) {
    let vocalsChange = changeVocals(name);
    let wordReverse = reverseWord(vocalsChange);
    let lowerUpperCase = setLowerUpperCase(wordReverse);
    return spacesRemove = removeSpaces(lowerUpperCase);
  } else {
    return hasil = 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
}

console.log(passwordGenerator('Sergei Dragunov'));
console.log(passwordGenerator('Dimitri Wahyudiputra'));
console.log(passwordGenerator('Alexei'));
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
