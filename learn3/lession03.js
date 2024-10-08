let arr = [1, 5, 6, 3, 2, 1, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
    list = [];
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            list.push(arr[i]);
        }
    }
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}

console.log("test");
