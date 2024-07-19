// Day-7: Objects

//Activity-1: Object creation and access
//Task-1: Create an object representing a book with properties like title,author and year, and log the object to the console
// const bookInfo = {
//     title: "Book One",
//     author: "BookWala",
//     year: 2024
// }
// console.log(bookInfo);
//Task-2: Access and log the title and author properties of the book object
// console.log(bookInfo.title);
// console.log(bookInfo.author);


//Activity-2: Object Methods
//Task-3: Add a method to the object that returns a string with the book title and author, log the result of calling this method
// const bookInfo = {
//     title: "Book One",
//     author: "BookWala",
//     year: 2024,
//     getBookInfo: () => (`Book Name: ${bookInfo.title},Author: ${bookInfo.author}`)
// }
// console.log(bookInfo.getBookInfo())

//Task-4: Add a method to the object that takes a parameter (year) and updates the book's year propert then log updated object
// const bookInfo = {
//     title: "Book One",
//     author: "BookWala",
//     year: 2024,
//     getBookInfo: () => (`Book Name: ${bookInfo.title},Author: ${bookInfo.author}`),
//     setYear: (newYear) => {
//         bookInfo.year = newYear
//     }
// }
// bookInfo.setYear(2023)
// console.log(bookInfo);


//Activity-3: Nested Objects
//Task-5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console
const libraryInfo = {
    name: "Central Library",
    books:[
        {
            title: "bookOne",
            author: "Author1",
            year: 2000
        },
        {
            title: "bookTwo",
            author: "Author2",
            year: 2015
        },
        {
            title: "bookThree",
            author: "Author3",
            year: 2020
        }
    ]
}
// console.log(libraryInfo);

//Task-6: Access and log the name of the library and the titles of all the books in the library
// console.log(libraryInfo.name);
// libraryInfo.books.forEach( (book) => {
//     console.log(book.title);
// } )


//Activity-4: The this keyword
//Task-7: Add a method to the book object that uses the this  keyword to return a string with the books title and year, and the log the result of calling this method
const bookInfo = {
    title: "bookTwo",
    author: "Author2",
    year: 2015,
    getInfo: () => (`Title: ${this.title},Year: ${this.year}`)
}
console.log(bookInfo.getInfo());

