//Day-8: ES6+ Features

//Activity-1: Template Literals
//Task-1: Use template literals to create a string that includes variable for a person's name and age, log the string to the console.
// let name = "Akil"
// let age = 18
// let str = `${name} is ${age} years old`
// console.log(str);

//Task-2: Create a multi-line string using template literals and log it to the console
// let str = `This is a multiline string
// this is line 2
// this is line 3
// this is line 4`;
// console.log(str)


//Activity-2: Destructuring
//Task-3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let [a,b] = arr
// console.log(a,b);

//Task-4: Use object destructuring to extract the title and author from a book object and log them to the console
const book = {
    title:"BookOne",
    author:"BookWala"
}
const {title,author} = book
// console.log(title,author)


//Activity-3: Spread and Rest Operators
//Task-5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console
// let arr = [1,2,3]
// console.log(arr);
// let newArr = [...arr,4,5]
// console.log(newArr);

//Task-6: Use the Rest operator in a function to accept an arbitary number of arguments, sum them, and return the result
// const sumNnums = (...nums) => (
//     nums.reduce( (acc,num) => (acc+num),0 )
// )
// console.log(sumNnums(1,2,3,4,5));


//Activity-4: Default parameters
//Task-7: Write a function that takes two parameters and returns their  product, with second parameter having a default value of 1.Log the result of callign this function with and without the second parameter
// const product = (n1,n2 = 1) => (n1*n2)
// console.log(product(3));
// console.log(product(3,3));

//Activity-5: Enhanced Object Literals
//Task-8: Use enhanced object literls to create an object with methods and properties, and log the object to the console.
// let a = 5
// let b = 10
// const sum = function(){
//     return this.a+this.b
// }
// const numObj = {a,b,sum}
// console.log(numObj.a);
// console.log(numObj.b);
// console.log(numObj.sum());
// console.log(numObj);

//Task-9: Create an object with computed property names based on variables and log the object to the console
const propName = 'dynamic'
const obj = {
    [propName]:'This value.'
}
console.log(obj);