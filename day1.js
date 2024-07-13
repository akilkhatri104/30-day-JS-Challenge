// // // //Activity-1 variable declaration

// // // //task1 :declare variable using var assign it to a num and log
// // // var num = 12
// // // console.log(num);

// // // //task2 :declare variable using let assign it to a string and log
// // // let str = "Akil"
// // // console.log(str);


// // // //Activity2 constant declaration

// // // //task3 :declare variable using const assign it to a boolean and log
// // // const bool = true
// // // console.log(bool);


// // //Activity3 data types  

// // //task4 : Create variables of different data types (number,string,boolean,object,array) and log each variable's data type using typeof

// // //number
// // let myNum = 54
// // console.log(typeof myNum);

// // //string
// // let myString = "This is a string"
// // console.log(typeof myString);

// // //boolean
// // let myBoolean = false
// // console.log(typeof myBoolean);

// // //object
// // let myObject = {
// //     name:"Akil",
// //     email:"akil@email.com"
// // }
// // console.log(typeof myObject);

// // //arrays
// // let myArray = [1,"Akil",true,[2,,4,5]]
// // console.log(typeof myArray);

// //Activity 4 reassigning variables
// //Declare a variable using let ,assign it with a value, then reassign it with another value,log both the values

// let myName = "Akil"
// console.log(myName);
// myName = "Akil Khatri"
// console.log(myName);

// //Activity 5 Understanding 'const'

// //Task 6 Try reassiing variable declared with const,observe the errorr
const myConst = "ABCD"
console.log(myConst);
myConst = "XYZ" 
/*myConst = "XYZ"
          ^

TypeError: Assignment to constant variable. */
console.log(myConst);