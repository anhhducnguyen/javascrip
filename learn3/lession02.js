// let arrRandom = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

// // let n = +prompt("Nhập vào số n: ");
// let n = 3;

// let arr = [];

// if(isNaN(n) || n > arrRandom.length) {
//     console.log("Số vừa nhập không hợp lệ");
// } else {
//     for (let i = 0; i < arrRandom.length; i++) {
//         arr.push(arrRandom[i]);
//         if (arr.length == n) {
//             for (let index of arr) {
//                 console.log(arr[index]);
//             }
//             break;

//         }
//     }
// }



// let arrRandom = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

// let n = 3;

// for (let k = 1; k <= arrRandom.length - 1; k++) {
//     for (let i = 0; i <= arrRandom.length - k; i++) {
//         let arr = [];
//         for (let j = i; j < i + k; j++) {
//             arr.push[arrRandom[j]];
//         }
//         console.log(arr);
//     }
// }



//Bài 1
let input = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let userInput = 3;


for (let k = 1; k <= input.length - 1; k++){
    for (let i = 0; i <= input.length - k; i++){
        let subArray = [];
        for (let j = i; j < i + k; j++){
            subArray.push(input[j]);
        }
        let total = 0;
        for (let index in subArray) {
            total = total + subArray[index];
        }
        if (total === userInput){
            console.log(subArray);
        }
    }
}