


// let studentList = [
//     {
//         id: 1,
//         name: "A",
//         age: 10
//     },
//     {
//         id: 2,
//         name: "B",
//         age: 10
//     },
//     {
//         id: 3,
//         name: "C",
//         age: 10
//     }
// ];

// // console.log(studentList[1].name);

// for (let index in studentList) {
//     console.log(`${studentList[index].name} - ${studentList[index].age}`);
// }

let phoneList = [
    {
        id: 1,
        phone: "0981402765",
        name: "Nguyen Van A"
    },
    {
        id: 2,
        phone: "0981402766",
        name: "Nguyen Van B"
    },
    {
        id: 3,
        phone: "0981402767",
        name: "Nguyen Van C"
    },
];
  
  // Xây dựng 1 ứng dụng danh bạ
  // Cho người dùng nhập vào 4 chữ cái c/r/u/d


function display(){
    for (let index in phoneList) {
        console.log(`${phoneList[index].name} - ${phoneList[index].phone}`);
    }
}


function checkContact(list, name) {
    for (let index in list) {
        if (list[index].name == name) {
            return true;
        } 
    }
    return false;
}

function create(list, nameContact, phone) {
    let newContact = {
        id: list[list.length - 1].id + 1,
        name: nameContact,
        phone: phone
    };
    list.push(newContact);
}

function update(list, nameContact, newPhone) {
    for (let index in list) {
        if (list[index].name === nameContact) {
            list[index].phone = newPhone; 
        }
    }
}

function deleteContact(list, name) {
    for (let index in list) {
        if (list[index].name == name) {
            list.splice(index, 1);
        }
    }
}
  


let input = prompt("Cho người dùng nhập vào 4 chữ cái c/r/u/d: ").toLocaleLowerCase();
// let input = 'd'
while(true){
    if (input == 'c') {
        // - c: Cho người dùng nhập vào tên của contact cần thêm mới
        let nameContact = prompt("c: Cho người dùng nhập vào tên của contact cần thêm mới");
        // - Kiểm tra xem contact đó đã tồn tại trong phone list hay chưa
        if (checkContact(phoneList, nameContact)) {
            // - Nếu tồn tại rồi thì thông báo "Liên hệ đã có"
            console.log("Liên hệ đã có");
        } else {
            // - Nếu chưa tồn tại, cho người dùng nhập vào số điện thoại
            let newPhone = prompt("Nếu chưa tồn tại, cho người dùng nhập vào số điện thoại");
            create(phoneList, nameContact, newPhone);
        }
        
        // - Tạo ra 1 contact mới và thêm vào phoneList
        // - Hiển thị ra toàn bộ danh bạ theo dạng 1. name - phone
        display();
    } else if (input == 'r') {
        // - r: Hiển thị ra toàn bộ danh bạ theo dạng 1.name - phone
        display(phoneList);
    } else if (input == 'u') {
        // - u: Cho người dùng nhập vào tên của contact cần cập nhật
        let nameContact = prompt("u: Cho người dùng nhập vào tên của contact cần cập nhật");
        // - Kiểm tra xem contact đó đã tồn tại trong phone list hay chưa
        if (checkContact(phoneList, nameContact)) {
            updateContact = prompt("Nếu có -> Cho người dùng nhập vào số đthoai mới");
            // update(phoneList, updateContact);
            update(phoneList, nameContact, updateContact);
        } else {
            console.log("Liên hệ bạn vừa tìm kiếm không tồn tại");
        }
        // - Nếu chưa thì thông báo "Liên hệ bạn vừa tìm kiếm không tồn tại"
        // - Nếu có -> Cho người dùng nhập vào số đthoai mới
        // - Cập nhật số điện thoại cho liên hệ vừa tìm đc trong phonelist
        // - Hiển thị ra toàn bộ danh bạ theo dạng 1. name - phone
        display();
    } else if (input == 'd') {
        // - d: Cho người dùng nhập vào tên của contact cần xoá
        let deleteName = prompt("d: Cho người dùng nhập vào tên của contact cần xoá");
        if (checkContact(phoneList, deleteName)) {
            deleteContact(phoneList, deleteName);
        } else {
            console.log("Liên hệ bạn vừa tìm kiếm không tồn tại");            
        }
        // - Kiểm tra xem contact đó đã tồn tại trong phone list hay chưa
        // - Nếu chưa thì thông báo "Liên hệ bạn vừa tìm kiếm không tồn tại"
        // - Nếu có -> Tiến hành xoá contact đó khỏi phone list
        // - Hiển thị ra toàn bộ danh bạ theo dạng 1. name - phone
        display();
    } else {
        console.log("Khong hop le");
        // - e: Dừng chương trình
        // NOTE: Chương trình phải là 1 vòng lặp vĩnh cửu khi người dùng nhập e
        // thì mới dừng lại
    }
}


// Read one - Lấy 1
// Read all - Lấy ra toàn bộ gtri của toàn bộ thuộc tính có trong js - For ... in
// for (let key in student) {
//     console.log(key, student[key]); // => student["name"], ...
// }
// student.sayHello();
// student.sayGoodBye();
// student.introduce("Long");
// Ràng buoocj từ khóa this trong js "Binding in js": Ràng buộc tường minh, Ràng buộc ngầm


// Create (Thêm mới 1 thuộc tính trong js)
// object.key = value (Dot notation + phép gán)
// student.girlfriends = ["Jisoo", "Lisa", "Jennie", "Rosie"];
// console.log(student);

// // Update - cập nhâtj 1 thuộc tính
// // object.key = value (Dot notation + phép gán)
// student.girlfriends = ["Moka", "Kim Ju Jung", "Han So Hee"];
// console.log(student);

// // Delete 
// delete student.girlfriends;
// console.log(student);