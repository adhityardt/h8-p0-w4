/*
Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string.
Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya.
Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.

function ubahHuruf(kata) {
  // you can only write your code here!
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

*/
function ubahHuruf(kata) {
  let hasil = '';
  for (var i = 0; i < kata.length; i++) {
    let strToNum = (kata[i].charCodeAt(0) - 97)+1;
    hasil += String.fromCharCode(97 + strToNum);
  }
  return hasil;
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
