//Day-5: Functions

//Activity-1: Function Declaration
//Task-1: Write a function to check if a number is even or odd and log the result
// function evenOrOdd(num){
//     if (num%2 == 0) {
//         console.log(`${num} is even`);
//     }else{
//         console.log(`${num} is odd`);
//     }
// }
// evenOrOdd(2)
// evenOrOdd(3)

//Task-2:Write function find the square of a number
// function square(num){
//     return num*num
// }
// console.log(`Square of 5 is ${square(5)}`);
// console.log(`Square of 3 is ${square(3)}`);


//Activity-2: Function Expression
//Task-3: Write a function expression to find the maximum of two numbers
// const maximum = function(num1,num2){
//     if (num2>num1) {
//         return num2
//     }
//     return num1
// }
// console.log(maximum(5,2));

//Task-4: Write a function expression to concatenate two strings and return output
// const concate = function(str1,str2){
//     return str1+str2
// }
// console.log(concate("Hello ","World"));


//Activity-3: Arrow Function
//Task-5: Write an arrow function to find sum of two numbers
// const sum = (num1,num2)=>(num1+num2)
// console.log(sum(1,2));

//Task-6: Write an arrow function to check if a string contains a specific charector and return a boolean
// const stringHas = (str,char) => (String(str).includes(char))
// console.log(stringHas("Akil","a"));

//Activity-4: Function parameters and default values

// Task-7: Write a function that takes two numbers and return the product of them:provide default value for second parameter
// const product = (num1,num2=1) => (num1*num2)
// console.log(product(5,8));

//Task-8: Write a function that takes a person's name and age and return a greeting msg.Provide a default value for age
// const greet = (name,age = 18) => {
//     if (age < 18) {
//         return `Hey ${name}`
//     }
//     return `Hello ${name}`
// }
// console.log(greet("Akil",5));

//Activity-5: Higher order function
//Task-9:Write a higer order function that takes a function and a number and calls the function that many times
// function callbackFunc(){
//     console.log("I am callback");
// }
// function higerOrderFunc(func,n){
//     while(n>0){
//         func()
//         n--
//     }
// }
// higerOrderFunc(callbackFunc,4)
// const sum = (num1,num2)=>(num1+num2)
// function square(num){
//     return num*num
// }
// function squareOfSum(n1,n2){
//     return square(sum(n1,n2))
// }
// console.log(squareOfSum(2,6));

