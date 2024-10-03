let n = +prompt("Nhập vào số n: ");

if(isNaN(n) || n <= 0) {
    console.log("Hãy nhập số hợp lệ");
} else {
    let sum = 0;
    for (let i = 1; i <= n ; i++) {
        sum = sum + (1/(i**3))
        // console.log(1/(i**3));
    }
    console.log(sum.toFixed(5));
}

