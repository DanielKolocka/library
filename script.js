const library = document.querySelector(".library");


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
addBookToLibrary("Title1", "John Doe", 223, true);
addBookToLibrary("Title2", "Steven Sarm", 105, false);

// console.log("Added a book. New Library: " + myLibrary[0].id);

function printLibrary(libraryArray) {
    const length = libraryArray.length;
    for (let i=0; i<length; i++) {
        // console.log(`Title: ${libraryArray[i].title}, author: ${libraryArray[i].author}, number of pages: ${libraryArray[i].numPages}, status: ${libraryArray[i].status}, id: ${libraryArray[i].id}`);
        const newBook = document.createElement("div");
        newBook.setAttribute("class", "book");
        newBook.setAttribute("id", libraryArray[i].id);

        const newTitle = document.createElement("p");
        newTitle.textContent = libraryArray[i].title;
        const newAuthor = document.createElement("p");
        newAuthor.textContent = libraryArray[i].author;
        const newPages = document.createElement("p");
        newPages.textContent = libraryArray[i].numPages + " Pages";

        const statusButton = document.createElement("button");
        statusButton.setAttribute("id", "changeStatus");
        statusButton.textContent = libraryArray[i].status ? "Read" : "Not Read";
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "deleteBook");
        deleteButton.textContent = "Delete";

        library.appendChild(newBook);
        newBook.appendChild(newTitle);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(statusButton);
        newBook.appendChild(deleteButton);
    }
    return;
}

function deleteBook(id) {
    const bookToRemove = document.querySelector("#" + id);
    library.removeChild(bookToRemove);
}

printLibrary(myLibrary);

const deleteButtons = document.querySelectorAll("#deleteBook");

console.log("test");
for (let i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", (e) => {
        // console.log(e.target.parentElement.id);
        deleteBook(e.target.parentElement.id);
    });
}

