// Contoh program untuk menentukan kategori usia
var usia = 25;

if (usia < 18) {
  console.log("Anda masih di bawah umur");
} else if (usia >= 18 && usia < 60) {
  console.log("Anda adalah dewasa");
  if (usia >= 21) {
    console.log("Anda juga sudah cukup umur untuk minum alkohol.");
  }
} else {
  console.log("Anda adalah seorang senior");
}
