let todoList = [
    "wake up early at 7am",
    "go to work at 8am",
    "eat 3 meals per day"
];

while (true) {
    let action = prompt("Hãy nhập lệnh:");
    if (action === "C" || action === "c") {
        let todo = prompt("Hãy nhập công việc mới của bạn:")
        todoList.push(todo);
        for (let index in todoList) {
            console.log(${+ index + 1}. ${ todoList[index] });
    }
} else if (action === "R" || action === "r") {
    for (let index in todoList) {
        console.log(${+ index + 1}. ${ todoList[index] });
}
        } else if (action === "U" || action === "u") {
    let updateIndex = +prompt("Bạn muốn cập nhật nội dung tại vị trí nào:");
    let todo = prompt("Hãy nhập nội dung bạn muốn thay thế:");
    todoList[updateIndex - 1] = todo;
    for (let index in todoList) {
        console.log(${+ index + 1}. ${ todoList[index] });
}
        } else if (action === "D" || action === "d") {
    let deleteIndex = +prompt("Bạn muốn xóa nội dung tại vị trí nào:")
    todoList.splice(deleteIndex - 1, 1);
    for (let index in todoList) {
        console.log(${+ index + 1}. ${ todoList[index] });
}
        } else if (action === "E" || action === "e") {
    alert("Bai bai");
    break;
} else {
    alert("Lệnh không hợp lệ. Vui lòng nhập lại.");
}
}