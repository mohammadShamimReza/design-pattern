class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


const books = new Map();

const createBook = (title, author, isbn) => { 
    const existingBook = books.has(isbn);

    if(existingBook) {
        return books.get(isbn);
    }

    const book = new Book(title, author, isbn);
    book.set(isbn, book);

    return book;
}

const bookList = [];
const addBook = (title, author, isbn, availability, sales) => {
    const book = {
        ...createBook(title, author, isbn),
        sales, availability, isbn
    };

    bookList.push(book);
    return
 }