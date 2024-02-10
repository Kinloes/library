const myLibrary = []

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.fullBook = function(){
        console.log(this.title, this.author,"is", this.pages,"long and I", this.read, "it.")
    };
};

function addBook(){
    let bookPrompt = prompt("What book are you adding to the library?");
    let authorPrompt = prompt("Who wrote the book?");
    let pagesPrompt = prompt("How many pages are in the book?");
    function readPromptFunc(){readPrompt = prompt("Have you finished it? (Write have finished or have not finished)");
    if (readPrompt == "have finished" || readPrompt == "have not finished") {
        console.log("CORRECT")
    }
    else{
        alert('please enter "have finished" or "have not finished"')
        readPromptFunc()
    }
    const libraryAddition = document.createElement("div");
    libraryAddition.innerText = "IT WORKED!!!";
    document.body.appendChild(libraryAddition);
}
    readPromptFunc()
    console.log(bookPrompt,"was written by", authorPrompt, "it's", pagesPrompt, "pages long and I", readPrompt, "it.")
}

const hobbit = new book("The Hobbit", "by J.R.R Tolkien", "295 pages", "have read");
const notHobbit = new book("Shane", "by Jack Schaefer", "88 pages", "have read")
hobbit.fullBook();
notHobbit.fullBook();
Object.getPrototypeOf(book) === hobbit.prototype