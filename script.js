const myLibrary = [];

function Book(title, author, numPages, status) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.status = status;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(bookTitle, bookAuthor, bookPages, bookStatus) {
    let book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    myLibrary.push(book);
}

// console.log("Library: " + myLibrary);
addBookToLibrary("Title1", "John Doe", 223, "Read");
addBookToLibrary("Title2", "Steven Sarm", 105, "Not Read");

// console.log("Added a book. New Library: " + myLibrary[0].id);

function printLibrary(libraryArray) {
    const length = libraryArray.length;
    for (let i=0; i<length; i++) {
        console.log(`Title: ${libraryArray[i].title}, author: ${libraryArray[i].author}, number of pages: ${libraryArray[i].numPages}, status: ${libraryArray[i].status}, id: ${libraryArray[i].id}`);
    }
    return;
}

printLibrary(myLibrary);

