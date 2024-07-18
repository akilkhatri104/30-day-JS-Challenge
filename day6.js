//Day-6: Arrays

//Activity-1: Array creation and access
//Task-1: Create an array of number 1 to 5 and log the array
// const nums = [1,2,3,4,5]
// console.log(nums);

//Task-2:Access the first and last element of array and log them
// const nums = [1,2,3,4,5]
// console.log(nums[0]);
// console.log(nums[4]);

//Activity-2:Array Methods (basics)
//Task-3: Use the push method to insert an element at the end of array and log the updated array
// const nums = [1,2,3,4,5]
// nums.push(6)
// console.log(nums);
//Task-4: Use the pop method to remove an element from the end of array and log the updated array
// nums.pop()
// console.log(nums);
//Task-5: Use the shift method to remove an element at the start of array and log the updated array
// nums.shift()
// console.log(nums);
//Task-6: Use the unshift method to add an element at the start of array and log the updated array
// nums.unshift(0)
// console.log(nums);

//Activity-3: Array Methods (intermedate)
//Task-7:Use the map method to create a new array where each number is doubled and log the new array
// const nums = [1,2,3,4,5]
// const newNums = nums.map( (num) => (2*num) )
// console.log(newNums);

//Task-8: Use the filter method to create an array with only even numbers and log the new array
// const nums = [1,2,3,4,5,6]
// const newNums = nums.filter( (num) => (num%2 == 0) )
// console.log(newNums);

//Task-9: Use the reduce method to calculate the sum of all the numbers in an array and log the array and log the result
// const nums = [1,2,3,4,5]
// const sum = nums.reduce( (acc,num) => (acc+num),0)
// console.log(nums);
// console.log(sum);

//Activity-4: Array Iteration
//Task-10: use a for loop to iterate over the array and log each element of the array
// const nums = [1,2,3,4,5]
// for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     console.log(element);
// }

//Task-11: Use for forEach  to iterate over the array and log the all elements
// const nums = [1,2,3,4,5]
// nums.forEach( (num) => {console.log(num);} )

//Activity-5: Multi-Dimentional Array
// Task-12: Create a 2D array and log the entire array
// const matrix = [
//     [1,2],
//     [3,4]
// ]
// matrix.forEach( (row) => {
//     console.log("NewRow");
//     row.forEach( (num) => {console.log(num);} )
// } )

//Task-13: Access and log a specific element from 2D array and log it
const n = 5
const matrix = [
    [1,2],
    [3,4]
]
matrix.forEach( (row) => {
    row.forEach( (num) => {
        if(num == n){
            console.log(num)
        }
    } )
} )



