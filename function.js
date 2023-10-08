// Contoh program dengan function untuk menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
    var luas = (alas * tinggi) / 2;
    return luas;
  }
  
  // Menggunakan function untuk menghitung luas segitiga
  var alasSegitiga = 5;
  var tinggiSegitiga = 8;
  
  var luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
  
  console.log("Luas segitiga dengan alas " + alasSegitiga + " dan tinggi " + tinggiSegitiga + " adalah " + luasSegitiga);
  