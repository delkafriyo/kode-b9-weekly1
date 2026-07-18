/* 
1. buat fungsi getMultiplicationTable
2. Fungsi menerima paramater berupa jumlah tabel
3. Buat perulangan
*/

function getMultiplicationTable(num) {
  for (let i = 1; i <= num; i++) {
    let lineNum = "";
    for (let k = 1; k <= num; k++) {
      lineNum += " " + k * i;
    }
    console.log(lineNum);
  }
}

getMultiplicationTable(5);
