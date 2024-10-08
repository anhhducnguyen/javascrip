let arr1 = [1, 2, 3, 4, 5];
let arr2 = [-3, -1, 0, 1, 5];
let arr3 = [1, 5, 6, 7];

let i = 0, j = 0, k = 0; // Khai báo ba con trỏ
let commonElements = [];  // Mảng lưu các phần tử chung

// Duyệt qua cả ba mảng cho đến khi một trong số chúng hết phần tử
while (i < arr1.length && j < arr2.length && k < arr3.length) {
    // Nếu phần tử tại cả ba con trỏ đều bằng nhau
    if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
        commonElements.push(arr1[i]); // Phần tử chung
        i++;
        j++;
        k++;
    }
    // Tăng con trỏ của mảng có phần tử nhỏ nhất
    else if (arr1[i] < arr2[j]) {
        i++;
    }
    else if (arr2[j] < arr3[k]) {
        j++;
    }
    else {
        k++;
    }
}

// In ra các phần tử chung
for (let x = 0; x < commonElements.length; x++) {
    console.log(commonElements[x]);
}
