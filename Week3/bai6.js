let arr = [1, 3, 2, 3, 6, 7, 10, 8, 9];
let even = []; // Mảng lưu các số chẵn
let odd = [];  // Mảng lưu các số lẻ

// Phân chia phần tử chẵn và lẻ
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]); // Thêm vào mảng chẵn
    } else {
        odd.push(arr[i]);  // Thêm vào mảng lẻ
    }
}

// Sắp xếp mảng chẵn (Bubble Sort)
for (let i = 0; i < even.length - 1; i++) {
    for (let j = 0; j < even.length - i - 1; j++) {
        if (even[j] > even[j + 1]) {
            // Hoán đổi vị trí nếu phần tử hiện tại lớn hơn phần tử kế tiếp
            let temp = even[j];
            even[j] = even[j + 1];
            even[j + 1] = temp;
        }
    }
}

// Sắp xếp mảng lẻ (Bubble Sort)
for (let i = 0; i < odd.length - 1; i++) {
    for (let j = 0; j < odd.length - i - 1; j++) {
        if (odd[j] > odd[j + 1]) {
            // Hoán đổi vị trí nếu phần tử hiện tại lớn hơn phần tử kế tiếp
            let temp = odd[j];
            odd[j] = odd[j + 1];
            odd[j + 1] = temp;
        }
    }
}

// Gộp mảng chẵn và mảng lẻ
let sortedArray = [];
for (let i = 0; i < even.length; i++) {
    sortedArray.push(even[i]);
}
for (let i = 0; i < odd.length; i++) {
    sortedArray.push(odd[i]);
}

// In ra mảng đã sắp xếp
for (let i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
