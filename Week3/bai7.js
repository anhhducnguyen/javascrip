// Yêu cầu người dùng nhập chuỗi
let str = prompt("Nhập vào một chuỗi bất kỳ: ");
let substrings = [];  // Mảng chứa các chuỗi con

// Duyệt qua các vị trí trong chuỗi
for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        // Thêm chuỗi con từ vị trí i đến j vào mảng
        substrings.push(str.slice(i, j));
    }
}

console.log(substrings);
