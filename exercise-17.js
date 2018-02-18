function totalDigitRekursif(angka) {
  if (angka === 0) {
    return 0;
  } else {
    let numToStr = String(angka).split('');
    return Number(numToStr[0]) + totalDigitRekursif(Number(numToStr.slice(1).join('')))
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
