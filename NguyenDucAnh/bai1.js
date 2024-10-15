// Bài 1 : Cho 1 chuỗi str. Viết chương trình đảo ngược chuỗi và in ra kết quả. (1đ)
// ●	Đầu vào: str 
// ●	Đầu ra: đảo ngược chuỗi và in ra kết quả
// ●	Ví dụ:
// ○	Cho: str = "program"; in ra: "margorp"
// ○	Cho: str = "data"; in ra: "atad"
// ●	Lưu ý: không sử dụng hàm reverse()

let str_1 = "program"
let str = "data"

let reversedStr = "";
let reversedStr_1 = "";

for (let i = str_1.length - 1; i >= 0; i--) {
    reversedStr_1 += str_1[i];
}

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}


console.log("Chuỗi 'program' sau khi đảo ngược là:", reversedStr_1);
console.log("Chuỗi 'data' sau khi đảo ngược là:", reversedStr);

