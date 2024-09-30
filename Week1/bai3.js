// Nhập 3 số từ người dùng
let a = +(prompt("Nhập số a: "));
let b = +(prompt("Nhập số b: "));
let c = +(prompt("Nhập số c: "));

// Khởi tạo biến max và tìm số lớn nhất
let max = a;

if (b > max) {
    max = b;
}

if (c > max) {
    max = c;
}

// In số lớn nhất ra màn hình console
console.log(`Số lớn nhất là - ${max}`);
