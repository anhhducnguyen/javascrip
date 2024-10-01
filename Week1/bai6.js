// Nhập độ dài 3 cạnh từ người dùng
let a = parseFloat(prompt("Nhập cạnh a: "));
let b = parseFloat(prompt("Nhập cạnh b: "));
let c = parseFloat(prompt("Nhập cạnh c: "));

// Kiểm tra xem ba cạnh có tạo thành tam giác không
if (a > 0 && b > 0 && c > 0 && (a + b > c) && (a + c > b) && (b + c > a)) {
    console.log("Ba cạnh trên có thể tạo thành một tam giác.");
} else {
    console.log("Ba cạnh trên không thể tạo thành một tam giác.");
}
