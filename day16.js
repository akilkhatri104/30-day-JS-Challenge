//Day-16: Recursion

const { find } = require("lodash")

//Activity-1: Basic Recursion

//Task-1:
// function factorial(n){
//     if(isNaN(n) || n < 0 ){
//         console.log("Give valid input");
//         return
//     }
//     if(n == 1 || n == 0){
//         return 1
//     }

//     return n*factorial(n-1)
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

//Task-2:
// function fibonaci(n){
//     if(n <= 1){
//         return n
//     }

//     return fibonaci(n-1)+fibonaci(n-2)
// }

// console.log(fibonaci(0));
// console.log(fibonaci(1));
// console.log(fibonaci(2));
// console.log(fibonaci(3));
// console.log(fibonaci(4));
// console.log(fibonaci(5));


//Activity-2: Recursion with Arrays

//Task-3:
// const arr = [47, 94, 51, 29, 18, 79, 50, 23, 65, 92]
// function sumArray(index = 0){
//     if(index == arr.length)
//         return 0
//     return arr[index]+sumArray(index+1)
// }

// console.log(sumArray());

//Task-4:
// const arr = [47, 94, 5121, 29, 18, 791, 50, 23, 65, 92]
// function findMax(index = 0,max = arr[0]){
//     if(index == arr.length){
//         return max
//     }

//     return findMax(index+1,(arr[index] > max)?(arr[index]):(max))
// }
// console.log(findMax());

//Activity-3: String Manupilation

//Task-5:
// const name = "IRTAHKLIKA"
// function reverseString(str,len,revStr = ""){
//     if(len < 0){
//         return revStr
//     }

//     return reverseString(str,len-1,revStr += str[len])
// }

// console.log(reverseString(name,name.length-1));

//Task-6:
// const str = "okos"
// function isPalindrome(str,lower,upper){
//     if(lower > upper)
//         return true

//     return (str[lower] == str[upper])?(isPalindrome(str,lower+1,upper-1)):(false)
// }

// console.log(isPalindrome(str,0,str.length-1));


//Activity-4: Recursive Search

//Task-7:
// const arr = [1,2,3,4,5,8,12,39,50]
// function binarySearch(arr,key,lower,upper){
//     if(lower > upper){
//         return -1
//     }

//     const mid = Math.floor((lower+upper)/2)
//     if(arr[mid] == key){
//         return mid
//     }else if(arr[mid] > key){
//         return binarySearch(arr,key,lower,mid-1)
//     }else{
//         return binarySearch(arr,key,mid+1,upper)
//     }

   
    
// }

// console.log(binarySearch(arr,60,0,arr.length-1))

//Task-8:
// const arr = [1,2,3,4,5,6,1,1,1,2,2,2]
// function countOccurance(arr,key,count = 0,index = 0){
//     if(index == arr.length){
//         return count
//     }

//     return (arr[index] == key)?(countOccurance(arr,key,count+1,index+1)):(countOccurance(arr,key,count,index+1))
// }

// console.log(countOccurance(arr,10));