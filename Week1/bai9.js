// Nhập năm từ người dùng
let year = parseInt(prompt("Nhập vào một năm: "));

// Kiểm tra năm nhuận
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} là năm nhuận.`);
} else {
    console.log(`${year} không phải là năm nhuận.`);
}
