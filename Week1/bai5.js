// Nhập 3 số từ người dùng
let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));

// Hoán đổi để sắp xếp theo thứ tự tăng dần
if (a > b) {
    let temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    let temp = a;
    a = c;
    c = temp;
}
if (b > c) {
    let temp = b;
    b = c;
    c = temp;
}

// In ra màn hình console theo thứ tự tăng dần
console.log(`Thứ tự tăng dần: ${a}, ${b}, ${c}`);
