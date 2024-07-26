// //Day-14: Classes

// //Activity-1: Class Defination

// //Task-1,2:
// class Person{
   
//     constructor(Name,Age){
//         this.name = Name
//         this.age = Age
//     }

//     setAge(age){
//         this.age = age
//     }

//     greeting(){
//         return `Hi,I am ${this.name}.I am ${this.age} years old.`
//     }

//     static greeting(){
//         return "Hello,How are you?"
//     }
// }

// const p1 = new Person("Akil",18)
// // console.log(p1.greeting())
// // p1.setAge(20)
// // console.log(p1.greeting())

// //Activity-2: Inheritance
// class Student extends Person{
//     static noOfStudents = 0
//     constructor(name,age,SID){
//         super(name,age)
//         this.studentID = SID
//         this.noOfStudents = this.setNoOfStudents(this.noOfStudents)
        
//     }

//     setNoOfStudents(noOfStudents){
//         return noOfStudents+1
//     }
    

//     getStudentID(){
//         return this.studentID
//     }

//     greeting(){
//         return `Hi,I am ${this.name}.I am ${this.age} years old.,My student id is ${this.studentID}`
//     }
// }

// const s1 = new Student("AKIL",18,123)
// const s2 = new Student("AJAY",20,456)
// // console.log(s1.greeting());


// //Activity-3: Static Methods and Properties
// // console.log(Person.noOfStudents)

// //Activity-4: Getters and Setters
class Person{
    constructor(fName,lName){
        this.firstName = fName
        this.lastName = lName
        
    }
    get Name(){
        return `${this.firstName} ${this.lastName}`
    }

    set firstName(fName){
        this._firstName = fName
    }

    get firstName(){
        return this._firstName
    }

    set lastName(lName){
        this._lastName = lName
    }

    get lastName(){
        return this._lastName
    }
}

const p1 = new Person("Akil","Khatri")
console.log(p1.Name);
p1.lastName = "KHATRI"
console.log(p1.Name);