function kaliTerusRekursif(angka) {
  if (angka === 0) {
    return 0;
  } else {
    let arrayAngka = String(angka).split('');
    return Number(numToStr[0]) * kaliTerusRekursif(Number(arrayAngka.slice(1).join('')))
  }
}

/*
function kaliTerusRekursif(angka) {
  if (String(kaliTerusRekursif(angka)).split('').length === 1) {
    return 1;
  } else {
    let arrayAngka = String(angka).split('');
    return Number(arrayAngka[0]) * kaliTerusRekursif(Number(arrayAngka.slice(1).join('')))
  }
}
*/

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
