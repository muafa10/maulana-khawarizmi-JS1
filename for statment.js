// Program menggunakan while untuk mencetak angka 1 hingga 5
var angka = 1;

while (angka <= 5) {
  console.log(angka);
  angka++;
}

// Program menggunakan do...while untuk meminta pengguna memasukkan angka positif
var input;
do {
  input = prompt("Masukkan angka positif:");
} while (isNaN(input) || input <= 0);

console.log("Anda memasukkan angka positif: " + input);
