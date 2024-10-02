// console.log("Vòng lặp hoạt động hàng ngày");

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

// Bài 1:

// let n = +prompt("Nhập vào số n: ")

// let sum = 0;
// for(let i = 0; i <= n; i = i+1){
//     console.log(i); 
//     sum = sum + i;
// }

// console.log(`Tổng là ${sum}`);

// Bài 2

// let n = 2;

// let sum_2 = 0;
// for(let i = 0; i <= n; i = i+1){
//     sum_2 = sum_2 + i ** i;
// }

// console.log(`Tổng là ${sum_2}`);


// Bài 3

// let n = +prompt("Nhập vào số n: ")

// let sum = 0;
// for(let i = 0; i <= n; i = i+1){
//     sum = sum + 1 + 1/(i-1)*i;
// }

// console.log(`Tổng là ${sum}`);


// Bài 4

let n = +prompt("Nhập vào số n: ")

for (let i = 1; i <= n; i = i+1){
    // console.log(i);
    // ưu tiên điều kiện kết hợp
    if(i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FizzBuzz`); 
    } else if (i % 5 == 0) {
        console.log(`${i} Buzz`); 
    } else if (i % 3 == 0) {
        console.log(`${i} Fizz`);
    } else {
        console.log(i);
    }
}













