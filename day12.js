//Day-12: Error Handling

//Activity-1: Basic Error Handling with Try-Catch 

//Task-1:
// function fun(){
//     try{
//         throw new Error("Operation Failed")
//     }catch(error){
//         console.error(error);
//     }
// }
// fun()

//Task-2:
// function divide(n1,n2){
//     try{
//         if(n2 == 0)
//             throw new Error("Division by zero not possible")
//         return n1/n2;
//     }catch(e){
//         console.error(e);
//     }
// }
// console.log(divide(1,2));
// console.log(divide(1,0));

//Activity-2: Finally Block

//Task-3:
// function fun(){
//     try{
//         let success = false
//         if(!success)
//             throw new Error("Operation Failed")
//         console.log("Operation successful");
//     }catch(e){
//         console.error(e);
//     }finally{
//         console.log("Operation completed");
//     }
// }
// fun()

//Activity-3: Custom Error Objects
//Task-4:
// function fun(){
//     try{
//         let success = false
//         if(!success)
//             throw new Error("Operation Failed")
//         console.log("Operation successful");
//     }catch(e){
//         console.error(e);
//     }finally{
//         console.log("Operation completed");
//     }
// }
// fun()

//Task-5:
// function validateInput(input = undefined){
//     try{
//         if(input == "" || input == undefined){
//             throw new Error("Input is empty,please try again")
//         }else{
//             console.log(`Your input: ${input}`);
//         }
//     }catch(e){
//         console.error(e);
//     }
// }
// validateInput("Akil")

//Activity-4: Error Handling in Promises

//Task-6:
// const myPromise = new Promise( (resolve) => {
//         try{
//             let success = false
//             if(success){
//                 resolve("Operation Successful")
//             }else{
//                 throw new Error("Operation Failed")
//             }
//         }catch(e){
//             console.error(e);
//         }
// }  )

// myPromise
//     .then( result => {
//         console.log(result);
//     } )
//     .catch(e => {
//         console.error(e);
//     })


//Task-7:
async function fun(){
    
}