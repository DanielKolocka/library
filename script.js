const library = document.querySelector(".library");
const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector("#addNewBook");
addBookButton.addEventListener("click", (e) => {
    dialog.showModal();
});

const dialogTitle = document.querySelector("#titleInput");
const dialogAuthor = document.querySelector("#authorInput");
const dialogPages = document.querySelector("#pagesInput");
const dialogStatus = document.querySelector("#isReadButton");
const dialogSubmit = document.querySelector("#submitButton");
dialogSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(dialogStatus.checked);
    // console.log(dialogTitle.value);
    // console.log(dialogPages.value);
    // console.log(dialogAuthor.value);
    addBookToLibrary(dialogTitle.value, dialogAuthor.value, dialogPages.value, dialogStatus.checked);
    printLibrary();
    //ff
});


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
// addBookToLibrary("Title1", "John Doe", 223, true);
// addBookToLibrary("Title2", "Steven Sarm", 105, false);

// console.log("Added a book. New Library: " + myLibrary[0].id);

function printLibrary() {
    // Remove everything first then print the entire list
    while (library.firstChild) {
        // console.log("removing");
        library.removeChild(library.firstChild);
    }

    for (let i=0; i<myLibrary.length; i++) {
        // console.log(`Title: ${libraryArray[i].title}, author: ${libraryArray[i].author}, number of pages: ${libraryArray[i].numPages}, status: ${libraryArray[i].status}, id: ${libraryArray[i].id}`);
        const newBook = document.createElement("div");
        newBook.setAttribute("class", "book");
        newBook.setAttribute("id", myLibrary[i].id);

        const newTitle = document.createElement("p");
        newTitle.textContent = myLibrary[i].title;
        const newAuthor = document.createElement("p");
        newAuthor.textContent = myLibrary[i].author;
        const newPages = document.createElement("p");
        newPages.textContent = myLibrary[i].numPages + " Pages";

        const statusButton = document.createElement("button");
        statusButton.setAttribute("id", "changeStatus");
        statusButton.textContent = myLibrary[i].status ? "Read" : "Not Read";
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
    const deleteButtons = document.querySelectorAll("#deleteBook");

    for (let i=0; i<deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", (e) => {
        console.log(e.target.parentElement.id);
        deleteBook(e.target.parentElement.id);
    });
}
    return;
}

function deleteBook(myid) {
    const bookToRemove = document.querySelector(`#${CSS.escape(myid)}`);
    console.log(bookToRemove);
    library.removeChild(bookToRemove);
    // console.log("my Lib before: " + myLibrary);
    myLibrary.forEach(book => {
        if (book.id == myid) {
            myLibrary.splice(myLibrary.indexOf(book));
        }
    })
    // console.log("my Lib after: " + myLibrary);
}

// printLibrary(myLibrary);



