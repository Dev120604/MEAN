// //common js approach
// const myModule = require('./module');
//
// console.log(myModule.pi);
// console.log(myModule.settings);
// console.log(myModule.greet('john'));
// console.log(myModule.empty());
// console.log(myModule.add(3,2));
//
// const user = new myModule.User('Doe');
// console.log(user);
// myModule.empty();

//ejs approach
//make "type" : "module" in package.json

//you have to use same name otherwise it will throw an error
import {pi , settings , add , empty , greet , User } from './ejsModuels.js';

//you can import a default export by any name
import s from './ejsModuels.js';
console.log(s);

console.log(pi);
console.log(settings);
console.log(greet("max"));
console.log(add(3,2));
console.log(empty());

const user = new User('john');
console.log(user);

empty();