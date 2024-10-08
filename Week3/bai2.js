let arr = [1, 5, 6, 3, 2, 1, 5, 6, 7];
let duplicates = [];  // Mảng lưu trữ các phần tử trùng lặp
let seen = {};  // Đối tượng lưu trữ số lần xuất hiện của các phần tử

for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
        seen[arr[i]] += 1;
    } else {
        seen[arr[i]] = 1;
    }
}

// Lấy các phần tử xuất hiện từ 2 lần trở lên
for (let key in seen) {
    if (seen[key] > 1) {
        duplicates.push(key);
    }
}

console.log("Các phần tử trùng lặp là:", duplicates);
