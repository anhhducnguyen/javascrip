// BÀI 1: Viết chương trình nhập vào số nguyên N. Nếu giá trị nhập vào > 0, yêu cầu người dùng nhập tiếp cho đến khi nào nhập vào số < 0 thì kết thúc. Hiển thị kết quả phân loại các số vừa nhập thuộc các nhóm số nguyên tố, số hoàn hảo, số chẵn, số lẻ

// BÀI 2: Tính tổng 30 số đầu tiên chia hết cho 5


let n = 30;

let sum = 0;
for(let i = 1; i <= 30; i = i + 1) {
    if (i % 5 == 0) {
        console.log(`Số chia hết cho 5: ${i}`);
        sum = sum + i;
    }
}

console.log(`Bài 2: Tính tổng 30 số đầu tiên chia hết cho 5 là: ${sum}`);


// BÀI 3: Tính tổng 20 số đầu tiên trong dãy Fibonacci
console.log(`Bài 3: Tính tổng 20 số đầu tiên trong dãy Fibonacci`);
var fib = [0, 1]
sum_fib = 0;
for (var i = 2; i <= 20; i = i + 1) {
    fib[i] = fib[i-1] + fib[i-2];
    sum_fib = sum_fib + fib[i];
}
console.log(fib);
console.log(`Tính tổng 20 số đầu tiên trong dãy Fibonacci ${sum_fib}`);


// Bài 4: Viết chương trình in bảng cửu chương

console.log(`Bài 4: Viết chương trình in bảng cửu chương`);

for (let i = 2; i < 10; i++){
    console.log(`Bảng nhân: ${i}`);
    for (let j = 1; j < 11; j++){
        // console.log('i = ' + i + ', j = ' + j);
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("");
  }
  

