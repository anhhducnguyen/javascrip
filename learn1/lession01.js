
// 1. Biến
var number= 10;
let fullName = "DucAnh";
const age = 21; 

// giá trị quyết định mang kiểu dữ liệu nào
// phạm vi hoạt động của biến
// const không gán lại giá trị mới 

// gán lại biến
number = 20; 
fullName;
// lỗi tại dòng 15 do gán lại biến do gán lại biến cho giá trị const
// Uncaught TypeError: Assignment to constant variable.
// at lession01.js:15:5

// => từ khóa + tên biến = giá trị


let number1 = 10;
let number2 = -2;
let number3 = 20.5;

// Toán tử 
// alert(number1 + number2);

number1 - number2;
number1 * number2;
number1 / number2;
number1 % number2;
number1 ** number2;

let ho = "Nguyen";
let tenDem = 'Duc';
let ten = `Anh`;

// `` có thể xuống dòng bất cứ khi nào

// alert(ho + " " + tenDem + " " + ten)

// alert(`${ho} ${tenDem} ${ten}`);


let is_Turn = false

// mệnh đề so sánh
// alert(1==1)
// alert(1!=1)

// phép so sánh tương đối ==
// alert(1 == "1");
// lỏng lẻo 2 vế có giá trị là 1 bỏ qua khác kiểu data

// phép so sánh tuyệt đối mệnh đề so sánh 3 dấu bằng nên dùng
// alert(1 ==="1");


// toán tử phủ đinh 
// alert(!(1>1));


// cấu trúc rẽ nhánh

// var input = prompt("Hãy nhập vào số: ");

// // console.log("a")

// var result = 50

// if (input < result) {
//     console.log("Bé quá!");
// } else if (input > result) {
//     console.log("Lớn quá!");
// } else{
//     console.log("Bingo!");
// }



// let a = +prompt("Hãy nhập vào số a");
// let b = +prompt("Hãy nhập vào số b");



// console.log(a+b);




