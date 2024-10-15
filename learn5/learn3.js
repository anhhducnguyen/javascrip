
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
while(true){
    if (input == 'c') {
        let nameContact = prompt("c: Cho người dùng nhập vào tên của contact cần thêm mới");
        if (checkContact(phoneList, nameContact)) {
            console.log("Liên hệ đã có");
        } else {
            let newPhone = prompt("Nếu chưa tồn tại, cho người dùng nhập vào số điện thoại");
            create(phoneList, nameContact, newPhone);
        }
        display();
    } else if (input == 'r') {
        display(phoneList);
    } else if (input == 'u') {
        let nameContact = prompt("u: Cho người dùng nhập vào tên của contact cần cập nhật");
        if (checkContact(phoneList, nameContact)) {
            updateContact = prompt("Nếu có -> Cho người dùng nhập vào số đthoai mới");
            update(phoneList, nameContact, updateContact);
        } else {
            console.log("Liên hệ bạn vừa tìm kiếm không tồn tại");
        }
        display();
    } else if (input == 'd') {
        let deleteName = prompt("d: Cho người dùng nhập vào tên của contact cần xoá");
        if (checkContact(phoneList, deleteName)) {
            deleteContact(phoneList, deleteName);
        } else {
            console.log("Liên hệ bạn vừa tìm kiếm không tồn tại");            
        }
        display();
    } else {
        console.log("Khong hop le");
    }
}