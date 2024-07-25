// export const add = (n1,n2 = 0) => n1+n2

// export const person = {
//     name: "Akil",
//     age: 18,
//     getAge: function(){
//         console.log(`${this.name} is ${this.age} years old`);
//     },
//     intro: function(){
//         console.log(`Hi! My name is ${this.name}`);
//     }
// }

// const add = (n1,n2 = 0) => n1+n2
// const substract = (n1,n2 = 0) => n1-n2
// const multiply = (n1,n2 = 1) => n1*n2
// const divide = (n1,n2 = 1) => {
//     if(n2 == 0)
//         throw new Error("Division by zero not possible")
//     return n1/n2
// }

// export {add,substract,multiply,divide}

// const msg = () => {
//     console.log("This function is a part of module,and is imported via Default Export");
// }

// export default msg

const add = (n1,n2 = 0) => n1+n2
const substract = (n1,n2 = 0) => n1-n2
const multiply = (n1,n2 = 1) => n1*n2
const divide = (n1,n2 = 1) => {
    if(n2 == 0)
        throw new Error("Division by zero not possible")
    return n1/n2
}
export {add,substract,multiply,divide}
