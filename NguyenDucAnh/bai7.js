// Bài 7 : Cho hai array:
// bookStore = [“Tôi thấy hoa vàng trên cỏ xanh”, “Đắc nhân tâm”]
// cart = []
// Viết một chương trình mô phỏng quá trình mua hàng của người dùng tại của hàng sách book store


let bookStore = [
    "Tôi thấy hoa vàng trên cỏ xanh", 
    "Đắc nhân tâm"
];

let cart = [];

function displayBook() {
    console.log("Danh sach book cua cua hang: ");
    for (let index in bookStore) {
       console.log(`STT: ${index} - Book name :${bookStore[index]}`);
    }
}

function displayCard() {
    console.log("Danh sach gio hang cua khach hang");
    for (let index in cart) {
        console.log(`STT: ${index} - Book name :${cart[index]}`);
     }
}

displayBook();

while(true) {
    input = prompt("Chon c de thuc hien chon san pham, chon e de ket thuc chon san pham va thuc hien thanh toan")
    if (input == "c") {
        let choose = prompt("Nhap vao vi tri sach muon mua:");
        cart.push(bookStore[choose]);
    } else {
        input == "e";
        break;
    }
}

displayCard();



