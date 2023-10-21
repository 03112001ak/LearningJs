/* JavaScript is a dynamically typed language which means, whenever we declare a value it doesn't need
    to know which data it is holding, it knows in the runtime and can change throughout the program as
    we assign different values to them*/

//There are two types of data types in js
// 1. Primitive 2. Non Primitive/Reference type
//difference between both of them is, how we store and access data from it

//  Primitive data types are call by value(changes are made in the *copy* of the original value) in nature
//  Primitive have 7 data types within them
//  7 types: String, Number, Boolean, null, undefined, Symbol(to make something unique), BigInt(to handle larger integer values)

// Reference type/Non Primitive this are call by reference, there types are listed below
// Array, Objects, Functions
// The data type of Reference type is a function but the data type of the Functions is object function

const id = Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);//Its output is false as we knew that Symbol is for the unique values
console.log(id);//Its output is Symbol(123)
console.log(anotherId);//Its output is Symbol(123)
console.log(id==anotherId); //Its output is also false

//array decalaration
let arrayOfHeroes=["Shaktiman", "Naagraj","Doga"];

//Object declaration
let MyObj={
    name:"Aditya",
    age:22,
    }

//Function Declaration
//Remember function can be stored in another variable

let firstFunction=function(){
    console.log("Well the function is made :-)");
}
