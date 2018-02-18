/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka.
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut,
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6.
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2 || 1*20, 2*10, 4*5
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2


*/
function digitPerkalianMinimum(angka) {
  let array = [];
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let array3Terkecil;
  for (var i = 0; i <= angka; i++) {
    if (angka % i === 0) {
      array.push(i);
    }
  }
  for (var j = 0; j < array.length; j++) {
    for (var k = j; k < array.length; k++) {
      if (array[k] * array[j] === angka) {
        array1.push(array[j]);
        array2.push(array[k]);
      }
    }
  }
  for (var l = 0; l < array1.length; l++) {
    array3.push(String(array1[l]).length + String(array2[l]).length)
  }
  
  for (var m = 0; m < array3.length; m++) {
    for (var n = m; n < array.length; n++) {
      if (array3[n] <= array3[m]) {
        array3Terkecil = array3[n];
      }
    }
  }
  return array3Terkecil;
}
