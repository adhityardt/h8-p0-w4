/*
Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka.
Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar).
FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

function fpb(angka1, angka2) {
  // you can only write your code here!
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1

*/
function fpb(angka1, angka2) {
  let angka = angka1 - angka2;
  if (angka > 0) {
    angka = angka1;
  } else {
    angka = angka2;
  }
  while (angka > 0) {
    if (angka1 % angka === 0 && angka2 % angka === 0) {
      break;
    }
    angka--;
  }
  return angka;
}

console.log(fpb(17, 23));
