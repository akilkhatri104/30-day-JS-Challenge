//Day-15:

//Activity-1: Understanding Clousers

//Task-1
// function addAndSquare(n1,n2){
//     sum = n1+n2

//     function square(){
//         return sum*sum;
//     }

//     return square()
// }

// console.log(addAndSquare(1,4)

//Task-2:
// const counter = function(){
//     let privateCounter = 0;
//     function changeBy(val){
//         privateCounter += val;
//     }

//     return {
//         increment(){
//            changeBy(1)
//         },
//         decrement(){
//             changeBy(-1)
//         },
//         value(){
//             return privateCounter
//         }
//     }
// }

// const myCounter = counter()
// console.log(myCounter.value());
// myCounter.increment()
// myCounter.increment()
// myCounter.increment()
// console.log(myCounter.value());
// myCounter.decrement()
// console.log(myCounter.value());

//Activity-2: Practical Clousers


//Task-3:
// const generateID = (function(){
//     let lastID = 1000
//     function changeBy(val){
//         lastID += val
//     }

//     return {
//         new(){
//             return changeBy(1)
//         },
//         lastCreated(){
//             return lastID
//         },
//         deleteLastID(){
//             return changeBy(-1)
//         }
//     }
// })()

// console.log(generateID.lastCreated());
// generateID.new()
// generateID.new()
// generateID.new()
// generateID.new()
// console.log(generateID.lastCreated());
// generateID.deleteLastID()
// console.log(generateID.lastCreated());

//Task-4:
// const greet = function (name) {
//     return {
//         sayHello() {
//             return `Hello ${name}`
//         },
//         sayHi(){
//             return `Hi ${name}`
//         }

//     }
// }

// console.log(greet("AKIL").sayHello())
// console.log(greet("AKIL").sayHi())


//Activity-3: Clousers in LOOPs
// for(let i = 0;i < 5;i++){
//     (function(){
//         console.log(i);
//     })()
// }

//Activity-4: Module Pattern
//Task-6:
// const collection = (function(){
//     let items = []

//     function addItem(item){
//         items.push(item)
//     }

//     function removeItem(item){
//         let index = items.indexOf(item)
//         if(index != -1){
//             items.splice(index,1)
//         }
//     }

//     function displayItems(){
//         items.forEach( (i) => {
//             console.log(i);
//         } )
//     }

//     return {
//         add:addItem,
//         remove:removeItem,
//         display:displayItems
//     }
// })()

// collection.add(1)
// collection.add(5)
// collection.add('Akil')
// collection.display()
// collection.remove('Akil')
// collection.display()


//Activity-5: Memoization
const memoizeFactorial = (function(){
    let cache = {}
    function factorial(n){
        if(n == 1 || n == 0){
            return 1
        }
        if(cache[n])
            return cache[n]

        const result = n*factorial(n-1)
        cache[n] = result
        return result
    }

    return factorial
})()

console.log(memoizeFactorial(4));
console.log(memoizeFactorial(5));