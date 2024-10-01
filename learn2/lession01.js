console.log("Vòng lặp hoạt động hàng ngày");

//  Bộ 3 diều kiện
//  i là biến chạy (giá trị khởi tạo): biến kiểm soát vòng lặp, biến khởi tạo
//  điều kiện kết thúc vòng lặp
//  bước nhảy
// for(let i = 1; i <= 7; i = i+1){
//     console.log(i);
//     console.log("Thức dậy");
//     console.log("Hoạt động");
//     console.log("Đi ngủ");    
// }

// for(let i = 1; i <=7; i = i + 1){
//     console.log(`So sánh i= ${i} và điều kiện i <= 7 (${i} <=7)  => true => thực hiện khối lệnh trong vòng for`);
// }

// for(let i = 0; i < 7; i = i + 1){
//     console.log(`So sánh i= ${i} và điều kiện i < 7 (${i} < 7)  => true => thực hiện khối lệnh trong vòng for`);
// }

// Cho người dùng nhập vào một số n tính tổng dãy số
// Tính tổng dãy số b = 1**2 + 2**2 + 3**2 +
// Tính tổng dãy 1/n 

let n = +prompt("Nhập vào số n: ")

let sum = 0;
for(let i = 0; i <= n; i = i+1){
    console.log(i); 
    sum = sum + i;
}

console.log(`Tổng của ${n} là ${sum}`);







