function sorting(arrNumber) {
  if (arrNumber.length < 1 || arrNumber === undefined) {
    return arrNumber;
  } else {
    let terbesar = arrNumber[0];
    for (var i = 0; i < arrNumber.length; i++) {
      if (arrNumber[i] > terbesar ) {
        terbesar = arrNumber[i];
      }
    }
    arrNumber.push(terbesar);
    return arrNumber;
  }
}

function getTotal(arrNumber) {
  if (arrNumber.length < 1 || arrNumber === undefined) {
    return hasil = '';
  }
  else {
    let counter = 0
    for (var i = 0; i < arrNumber.length - 1; i++) {
      if (arrNumber[arrNumber.length - 1] === arrNumber[i]) {
        counter++;
      }
    }
    return hasil = `angka paling besar adalah ${arrNumber[arrNumber.length - 1]} dan jumlah kemunculan sebanyak ${counter} kali`;
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
