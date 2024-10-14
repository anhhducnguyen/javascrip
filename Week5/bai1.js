class Book {
    constructor(author, name) {
        this.author = author;
        this.name = name;
    }
}


let books = [
    new Book('Nguyen Van A', 'Book 1'),
    new Book('Nguyen Van B', 'Book 2'),
    new Book('Nguyen Van C', 'Book 3'),
    new Book('Nguyen Van A', 'Book 4'),
];

let authorInput = "Nguyen Van A";

// sử dụng filter thay vì find vì trả về tất cả
let foundBook = books.filter(book => book.author.toUpperCase() == authorInput.toUpperCase());


if (foundBook.length > 0) {
    foundBook.forEach(book => {
        console.log(`${book.name} - ${book.author}`);
    })
} else {
    console.log("Khong tim thay sach");
}