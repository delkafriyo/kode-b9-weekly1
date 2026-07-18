// BUILT-IN METHOD

// 1. Replace Method
// Metode ini merupakan metode untuk string yang berfungsi untuk mengganti suatu kata yang sudah ada menjadi kata baru.
// Cara penggunaan Method ini adalah dengan memberikan dua parameter yang terdiri dari informasi nilai yang akan dihapus dan nilai penggantinya.
// Method ini akan mengeluarkan output teks baru tanpa merubah / mutasi teks yang lama

let teks = "Bunga mawar ini sangat indah";
let teksBaru = teks.replace("mawar", "melati");
console.log(teksBaru);

// 2. Method toUpperCase
// Method ini akan mengubah string menjadi huruf besar semua.
// Input harus berupa string dan akan mengeluarkan output baru
// tanpa mengubah nilai awal.

console.log(teks.toUpperCase());

// 3. Method Pop
// Method ini berfungsi untuk menghapus nilai terakhir dari
// sebuah array dan mengambil nilai terakhir dari element tersebut. Input harus berupa array dan outputnya merupakan nilai terakhir dari array yang diinputkan. Fungsi ini merubah / mutasi array yang asli.

let arr = ["harimau", "Kuda", "Zebra", [1, 2]];
let popArr = arr.pop();
console.log(arr);
console.log(popArr);

// 4. Method Search
// Method ini digunakan untuk mencari sebuah string atau reguler expression di dalam teks string lainnya. Jika indeks ditemukan maka akan menghasilkan output indeks (posisi angka)
//dari kecocokan pertama. jika tidak ditemukan makan output akan menghsilkan nilai -1.

let text1 = "My name is Zlatan";
let position = text1.search("name");

console.log(position);

// 5. Method Trim
//Method ini berfungsi untuk menghilangkan spasi berlebih pada
// bagian depan atau belakang sebuah teks sehingga teks menjadi lebih rapi. Input berupa string dan nantinya akan menghasilkan output berupa string baru yang sudah dirapikan. Fungsi ini tidak mengubah string asli.

let teks2 = "      Piala Dunia      ";
let newTeks2 = teks2.trim();
console.log(teks2);
console.log(newTeks2);
