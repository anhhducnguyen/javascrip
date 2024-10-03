let studentLists = [
    "Nguyen Duc Anh", 
    "Nguyen Mai Ngan", 
    "Hoang Ngoc Huyen",
    "Hoang Ngoc Mai",
    "Nguyen Ngoc Lan"
];

// element: phần tử
// index
// length

// console.log("Danh sách sinh viên",studentLists);

// // templateString_read_one
// console.log(`${studentLists[2]} đi ăn không`);

// // read_all thao tac or duyet qua cac phan tu trong mang
// console.log("Duyệt qua các phần tử trong mảng");

// for(let i = 0; i < studentLists.length; i++) {
//     console.log(`${i+1} Hay lam bai tap di ${studentLists[i]}`);
// }

// console.log("Duyệt qua các phần tử trong mảng từ giữa về cuối");

// // Duyệt từ giữa về cuối
// mid = parseInt(studentLists.length/2);
// for(let i = mid; i < studentLists.length; i++) {
//     console.log(`${i+1} Hay lam bai tap di ${studentLists[i]}`);
// }

// // For_of: duyệt qua mảng không quan tâm đến chỉ số từng phần tử trong mảng
// console.log("For_of: duyệt qua mảng không quan tâm đến chỉ số từng phần tử trong mảng");

// for (let student of studentLists) {
//     console.log(`2. Hay lam bai tap di ${student}`);
// }

// // For_in: duyệt qua mảng theo chiều xuôi và vẫn thao tác được với từng phần tử
// for (let index in studentLists) {
//     console.log(+index + 1, studentLists[index]);
// }
// Thêm vào đầu
studentLists.unshift("Nguyen Van Dau")
console.log(studentLists);


// Thêm vào cuối
studentLists.push("Nguyen Van Cuoi");
console.log(studentLists);


// Thêm vị trí bất kì 
studentLists.splice(4, 0, "Nguyen Van Giua");
console.log(studentLists);


// Cập nhật
studentLists[5] = "Nguyen Van Nhat";
console.log(studentLists);







