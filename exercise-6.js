/*
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string.
Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar.
Contoh: "Today, is the greatest day ever!" akan me-return "greatest"
karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu.
Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.

function hitungHuruf(kata) {
  // you can only write your code here!
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // mengayuh

*/

function hitungHuruf(kata) {
  let splitSpasi = kata.split(' ');
  let hasil;
  for (var i = 0; i < splitSpasi.length; i++) {
    for (var j = i; j < splitSpasi.length; j++)
      if (splitSpasi[i].length > splitSpasi[j].length) {
        hasil = splitSpasi[i];
      }
    }
  if (splitSpasi[0].length > hasil.length){
      hasil = splitSpasi[0];
  }
  return hasil;
}
