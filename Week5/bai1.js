class Book {
    constructor(author, name) {
        this.author = author;
        this.name = name;
    }
}

let Books = [
    new Book('Nguyen Van A', 'Book 1'),
    new Book('Nguyen Van B', 'Book 2'),
    new Book('Nguyen Van C', 'Book 3'),
    new Book('Nguyen Van D', 'Book 4'),
    new Book('Nguyen Van B', 'Book 5'),
    new Book('Nguyen Van F', 'Book 6')
];


// let inputName = +prompt("Nhập tên Author").toLocaleUpperCase();
let inputName = "Nguyen Van D";
let formatName = inputName.toLocaleUpperCase();

function display(){
    let found = false;
    for (let index in Books) {
        if (Books[index].author.toLocaleUpperCase() == formatName) {
            console.log(Books[index].name);
            found = true;
        }
    }
    if (!found) {
        console.log("Khong tim thay sach");
    }
}

display();