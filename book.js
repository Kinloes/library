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
    const libraryAddition = document.createElement("div");
    let arrayAdd = myLibrary.push(titlePrompt.value + " " + authorPrompt.value + " " + pagesPrompt.value)
    libraryAddition.innerText = myLibrary[myLibrary.length - 1]
    document.body.appendChild(libraryAddition);
    console.log(myLibrary)
}

/*const hobbit = new book("The Hobbit", "by J.R.R Tolkien", "295 pages", "have read");
const notHobbit = new book("Shane", "by Jack Schaefer", "88 pages", "have read")
hobbit.fullBook();
notHobbit.fullBook();
Object.getPrototypeOf(book) === hobbit.prototype*/
