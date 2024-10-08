function findSmallestMissingPositive(arr) {
    let positiveNums = [];
    
    // Lọc các phần tử lớn hơn 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNums.push(arr[i]);
        }
    }

    // Sắp xếp mảng theo thứ tự tăng dần (Bubble Sort)
    for (let i = 0; i < positiveNums.length - 1; i++) {
        for (let j = 0; j < positiveNums.length - i - 1; j++) {
            if (positiveNums[j] > positiveNums[j + 1]) {
                // Hoán đổi hai phần tử
                let temp = positiveNums[j];
                positiveNums[j] = positiveNums[j + 1];
                positiveNums[j + 1] = temp;
            }
        }
    }

    // Tìm phần tử dương nhỏ nhất chưa có trong mảng
    let smallestMissing = 1;
    
    for (let i = 0; i < positiveNums.length; i++) {
        if (positiveNums[i] == smallestMissing) {
            smallestMissing++;
        }
    }
    
    return smallestMissing;
}

// Test case 1
console.log(findSmallestMissingPositive([1, 2, 5, 7]));  // Output: 3

// Test case 2
console.log(findSmallestMissingPositive([10, 5, 7]));  // Output: 1
