const myLibrary = [];
let i = 1;
function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.fullBook = function(){
        console.log(this.title, this.author,"is", this.pages,"long and I", this.read, "it.")
    };
};
function theClickFunction(){
    let readPrompt = document.getElementById("readPrompt");
    if (readPrompt.checked == true){
        return("I have read it");
    }
    else{
        return("I have not read it");
    }
}

function addBook(){
    const libraryAddition = document.createElement("div");
    libraryAddition.id = `bookNum ${i}`;
    let arrayAdd = myLibrary.push(titlePrompt.value + " " + authorPrompt.value + " " + pagesPrompt.value + " " + theClickFunction()) 
    libraryAddition.innerText = myLibrary[myLibrary.length - 1];
    document.body.appendChild(libraryAddition);
    const delButton = document.createElement("button");
    delButton.textContent = "Delete entry";
    document.body.appendChild(delButton);
    console.log(myLibrary);
    i++
}

/*const hobbit = new book("The Hobbit", "by J.R.R Tolkien", "295 pages", "have read");
const notHobbit = new book("Shane", "by Jack Schaefer", "88 pages", "have read")
hobbit.fullBook();
notHobbit.fullBook();
Object.getPrototypeOf(book) === hobbit.prototype*/