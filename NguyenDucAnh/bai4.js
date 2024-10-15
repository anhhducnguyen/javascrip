// Bài 4 : Viết một chương sắp xếp các phần tử là số ở trong mảng theo thứ tự tăng dần. (1đ)
// ●	Đầu vào: 1 mảng
// ●	Đầu ra: Mảng mới với số đã được sắp xếp theo thứ tự tăng dần
// ●	Ví dụ
// ○	Cho Arr=[5, 2, 3, 4, 1]; In ra Arr=[1,2,3,4,5]
// ●	Lưu ý: Không dùng hàm sort()

function sort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let Arr = [5, 2, 3, 4, 1];
let sortedArr = sort(Arr);
console.log(sortedArr); 
