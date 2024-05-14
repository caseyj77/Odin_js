// create a function using this
function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function() {
        let readStatus = this.hasRead ? 'have' : 'have not';
        return `${this.title} by ${this.author} and is ${this.pages} pages long, I ${this.hasRead} read this book.`;
    }
}

// adding a book name for the const then call the new Book function and add the information. 
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'have')
const germanWar = new Book('The German War', 'Nocholas Stargardt', 736, 'have')

//log out the book information
console.log(theHobbit.info());
console.log(germanWar.info());