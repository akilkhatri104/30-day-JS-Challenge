//Day-4: Loops

//Activity-1: For Loops
//Task-1: Write for loop to print numbers from 1 to 10 
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Task-2: Write a for loop to print multiplication table of 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`${5}X${i}=${i*5}`);
    
// }

// Activity-2: While loop
//Task-3: Write a program to get sum of numbers from 1 to 10 using while loop
// let sum = 0
// let i = 1
// while (i<11) {
//     sum += i++
// }
// console.log(sum);

//Task-4: Write a program to print number 10 to 1 using while loop
// let i = 10
// while (i != 0) {
//     console.log(i--);
// }

//Activity-3:Do While Loop
//Task-5: Write a program to print numbers from 1 to 5 using do.while loop
// let i = 1
// do {
//     console.log(i);
//     i++
// } while (i!=6);

//Task-6:Write a program to calculate factorial of a number using do while loop
// let n = 6
// let fact = 1
// do {
//     fact *= n--
// } while (n != 1);
// console.log(fact);


//Activity-4: Nested Loops
//Task-7: Write a program to print a pattern using nested for loops:
/*
*
**
***
*/
// let n = 10
// for(let i = 0;i<n;i++){
//     for(let j = 0;j<i;j++){
//         process.stdout.write('*') 
//     }
//     console.log();
// }


//Activity-5: Loop Control Statements 

//Task-8:Write a program to print 1 to 10 but skip 5 using continue
// for(let i = 1;i<=10;i++){
//     if(i == 5) continue
//     console.log(i);
// }

//Task-9:Write a program to print 1 to 10 but stop the loop when number is 7 using break
for(let i = 1;i<=10;i++){
    if(i == 7) break
    console.log(i);
}