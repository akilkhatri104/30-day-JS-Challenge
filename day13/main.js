//Day 13: Modules

//Activity-1: Creating and exporting Modules

//Task-1:
// import {add} from './module.mjs'
// console.log(add(1,2));

//Task-2:
// import {person} from './module.mjs'
// person.intro()

//Activity-2: Named and Default exports

//Task-3:
// import { add,substract, multiply,divide} from './module.mjs'
// console.log(add(1,2));
// console.log(substract(1,2));
// console.log(multiply(1,2));
// console.log(divide(1,2));

//Task-4
// import msg from "./module.mjs";
// console.log(msg());

//Activity-3: Importing entire module
// import  * as  Operations  from "./module.mjs";
// console.log(Operations.add(1,4));
// console.log(Operations.substract(1,4));
// console.log(Operations.multiply(1,4));
// console.log(Operations.divide(1,4));

//Activity-4: Using third-pary modules
// import _ from 'lodash'
// const array = [1, 2, 3, 4];
// const shuffledArray = _.shuffle(array);
// console.log(shuffledArray);

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });