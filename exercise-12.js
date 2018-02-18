function shoppingTime(memberId, money) {
  let uang = money;
  let hasil;
  let listBarang = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone'];
  let listHarga = [1500000, 500000, 250000, 175000, 50000];
  let daftarBeli = [];
  if (memberId === undefined || memberId === '') {
    hasil = 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else {
    if (money < 50000) {
      hasil = 'Mohon maaf, uang tidak cukup';
    } else {
      for (var i = 0; i < listHarga.length; i++) {
        if(uang >= listHarga[i]){
          daftarBeli.push(listBarang[i]);
          kembalian = uang - listHarga[i]
          uang = kembalian;
        }
      }
      hasil = {
        memberId: memberId,
        money: money,
        listPurchased: daftarBeli,
        changeMoney: uang
      };
    }
  }
  return hasil;
}
