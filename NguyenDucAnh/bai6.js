// Bài 6 : Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)
// A, Kiểm tra xem ngày tháng năm đó có hợp lệ hay không (1đ)
// ●	Ví dụ
// ○	Ngày 30/4/2019 là ngày hợp lệ
// ○	Ngày 29/2/2019 là ngày không hợp lệ
// ●	Gợi ý: hợp lệ nếu ngày ∈ [1,31] và tháng ∈ {1,3,5,7,8,10,12} hoặc ngày ∈ [1,30] và tháng ∈ {4,6,9,11} hoặc tháng 2 năm nhuận thì có ngày 29 ngược lại tháng 2 năm không nhuận thì chỉ có đến ngày 28
// B, Nếu ngày tháng năm đó hợp lệ thì đưa thêm thông tin về ngày tiếp theo (1đ)
// ●	Ví dụ
// ○	Ngày 30/04/2019 là ngày hợp lệ” “Ngày tiếp theo là: 01/5/2019
// ○	Ngày 31/12/2020 là ngày hợp lệ” “Ngày tiếp theo là: 01/01/2021


let date = "30";
let month = "4";
let year = "2019";

console.log(`${date}/${month}/${year}`);

// let date = +prompt("Nhập ngày:");
// let month = +prompt("Nhập tháng: ");

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10: 
    case 12:
        console.log(`Tháng ${month} có 31 ngày`);
    break;

    case 4:
    case 6: 
    case 9:
    case 11:
        console.log(`Tháng ${month} có 30 ngày`);
    break;

    case 2:
        let year = +prompt("Nhập năm: ");
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            console.log(`Tháng ${month} có 29 ngày`);
        } else {
            console.log(`Tháng ${month} có 28 ngày`);
        }
        break;
    
    default:
        console.log(`Tháng ${month} không hợp lệ!`);
        break;
}


