//Day-11: Promises and Async/Await

//Activity-1: Understanding Promises

//Task-1:
// const myPromise = new Promise( (resolve,reject) => {
//     let success = true;

//     if(success){
//         resolve("Promise was fulfield");
//     }else{
//         reject("Promise was not fulfiled")
//     }
// } )

// setTimeout( ()=>{
//     console.log("2-second delay")
//     myPromise.then( result => {
//         console.log(result)
//     })
// } , 2000)

//Task-2:
// const myPromise = new Promise( (resolve,reject) => {
//     let success = false;
//     console.log("2-second delay")
//     setTimeout( () => {
//         if(success){
//             resolve("Operation Successful")
//         }else{
//             reject("Operation Failed")
//         }
//     } , 2000 )
// } )

// myPromise
//   .then(result => {
//     console.log(result); // This runs if the promise is fulfilled
//   })
//   .catch(error => {
//     console.error(error); // This runs if the promise is rejected
//   })
//   .finally(() => {
//     console.log("Operation completed."); // This runs regardless of the outcome
//   });

//Activity-2: Chaining Promises
//Task-3:
// const sendData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let success = true;

//     if (success) {
//       resolve("Data sent successfully");
//     } else {
//       reject("Data could not be sent");
//     }
//   }, 2000);
// });

// const receiveData = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         let success = false

//         if(success){
//             resolve("Data Received")
//         }else{
//             reject("Data not received")
//         }
//     },2000 )
// } )

// sendData
//     .then( sendResult => {
//         console.log(sendResult);
//         return receiveData
//     } )
//     .then( receiveResult => {
//         console.log(receiveResult)
//     } )
//     .catch( (error) => {
//         console.error(error)
//     } )
//     .finally( () => {
//         console.log("Operation Successful");
//     } )

//Activity-3: Async/Await
//Task-4
// const myPromise = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         let success = true

//         if(success){
//             resolve("Operation Successful")
//         }else{
//             reject("Opeation Failed")
//         }
//     }, 2000 )
// } )

// async function resolvePromise(){
//     try{
//         const result = await myPromise
//         console.log(result);
//     } catch(error){
//         console.log(error);
//     }finally{
//         console.log("Operation Completed");
//     }

// }

// resolvePromise()

//Task-5
// const myPromise = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         let success = false

//         if(success){
//             resolve("Operation Successful")
//         }else{
//             reject("Opeation Failed")
//         }
//     }, 2000 )
// } )

// async function resolvePromise(){
//     try{
//         const result = await myPromise
//         console.log(result);
//     } catch(error){
//         console.log(error);
//     }finally{
//         console.log("Operation Completed");
//     }

// }

// resolvePromise()

//Activity-4: Fetching data from public api
const myPromise = new Promise((resolve,reject) => {
    const url = "https://www.anapioficeandfire.com/api/characters"
    fetch(url)
        .then( response => {
            if(response.ok){
                return response.json().then(data => {
                    resolve(data);
                })
            }else{
                reject("Did not get the result")
            }
        } )
        .catch( erorr => {
            console.eror(eror)
        })
        
} )

myPromise
    .then( result => {
        console.log(result)
    } )
    .catch( error => {
        console.error(error)
    } )
    .finally( () => {
        console.log("Complete");
    } )

//Task-7:
// async function fetchData(){
//     const url = "https://www.anapioficeandfire.com/api/characters"

//     try{
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error(`Response status: ${response.status}`)
//         }

//         const json = await response.json()
//         console.log(json);
//     }catch(error){
//         console.error(error)
//     }


// }

// fetchData()