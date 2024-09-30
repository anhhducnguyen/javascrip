// Nhập điểm các môn từ người dùng
let toan = parseFloat(prompt("Nhập điểm Toán: "));
let van = parseFloat(prompt("Nhập điểm Văn: "));
let anh = parseFloat(prompt("Nhập điểm Anh: "));

// Tính điểm trung bình
let diemTB = (toan + van + anh) / 3;

// Xếp loại học sinh dựa trên điểm trung bình
let xeploai;
if (diemTB >= 8.0 && diemTB <= 10) {
    xeploai = "GIỎI";
} else if (diemTB >= 6.5 && diemTB <= 7.9) {
    xeploai = "KHÁ";
} else if (diemTB >= 5.0 && diemTB <= 6.4) {
    xeploai = "TRUNG BÌNH";
} else {
    xeploai = "YẾU";
}

// Hiển thị kết quả
console.log(`Điểm trung bình: ${diemTB.toFixed(2)}`);
console.log(`Xếp loại: ${xeploai}`);
