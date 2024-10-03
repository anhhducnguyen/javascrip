let input = +prompt("Nhập vào số n:");

let isPrime = false;  // Khai báo biến isPrime bên ngoài để tránh lỗi

if (input < 2) {
    console.log(`${input} không phải số nguyên tố`);
} else {
    isPrime = true; 
    let check = Math.sqrt(input);

    for (let i = 2; i <= check; i++) {
        if (input % i === 0) {
            isPrime = false;  // Tìm thấy ước số, không phải nguyên tố
            break;
        }
    }
}

if (isPrime) {
    console.log(`${input} là số nguyên tố`);
} else {
    console.log(`${input} không phải số nguyên tố`);
}   
