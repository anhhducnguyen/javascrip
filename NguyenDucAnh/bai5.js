// Bài 5 : Tạo một mảng gồm 3 nhân viên Rikkei Academy (tên nhân viên).
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

let employee = [
    "Nguyen Van A", 
    "Nguyen Van B", 
    "Nguyen Van C"
];

function displayEmployee() {
  for (let index in employee) {
    console.log(`STT: ${index} - Name: ${employee[index]}`);
  }
}


// let input = "d";
while(true) {
    let input = prompt("Nhap vao c, r, u, d").toLowerCase();
    if (input == "c") {
        let createEmp = prompt("Nhap ten nhan vien moi: ");
        employee.push(createEmp);
        displayEmployee();
      } else if (input == "r") {
        displayEmployee();
      } else if (input == "u") {
        let indexUpdateEmp = +prompt("Nhap vao vi tri cua nhan vien muon cap nhap");
        let updateEmp = prompt("Nhap ten nhan vien muon cap nhat");
        employee[indexUpdateEmp] = updateEmp;
        displayEmployee();
      } else if (input == "d") {
        let indexDeleteEmp = +prompt("Nhap vao vi tri cua nhan vien muon xoa");
        employee.splice(indexDeleteEmp, 1);
        displayEmployee();
      } else {
        input = "e";
        break;
      }
}
