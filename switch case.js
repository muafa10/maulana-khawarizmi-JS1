// Contoh program dengan switch case untuk hari dalam seminggu
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Selasa":
  case "Rabu":
  case "Kamis":
  case "Jumat":
    console.log("Hari ini adalah hari kerja.");
    break;
  case "Sabtu":
    console.log("Hari ini adalah hari Sabtu, akhir pekan!");
    break;
  case "Minggu":
    console.log("Hari ini adalah hari Minggu, akhir pekan!");
    break;
  default:
    console.log("Ini bukan hari yang valid.");
}
