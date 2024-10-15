// Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (1đ)
// ●	Đầu vào: str
// ●	Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
// ●	Ví dụ
// ○	Cho "this is A Test"; In ra "This Is A Test"
// ○	Cho "hello future academy"; In ra "Hello Future Academy”

// let str = "this is A Test";
let str = "hello future academy";

let myArray = str.split(" ");

let arr_str = [];

for (let index in myArray) {
  arr_str.push(myArray[index].charAt(0).toUpperCase() + myArray[index].slice(1));
}

let result = arr_str.join(" ");

// In ra kết quả
console.log(result);
