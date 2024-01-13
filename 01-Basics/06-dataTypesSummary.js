/* JavaScript is a dynamically typed language which means, whenever we declare a value it doesn't need
    to know which data it is holding, it knows in the runtime and can change throughout the program as
    we assign different values to them*/

//There are two types of data types in js
// 1. Primitive 2. Non Primitive/Reference type
//difference between both of them is, how we store and access data from it on the basis of this only the data types has been categorised

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

const bigNumber=234812134576789645352342423n;//This is a bigInt number, a number appended with 'n'
console.log(typeof bigNumber);//undefined, it is a special case

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
console.log(typeof firstFunction);//Its o/p is function but we should call it as object function

//Example of primtive data type being called by value
let age=25;
function ageChanger(value){
    value=35;
    console.log(value);//o/p would be 35
}
ageChanger(age);
console.log(age);//o/p would be 25

//Example of reference data type being called by reference
let person={name:'Aditya', age: 23}
function anotherAgeChanger(myObj){
    myObj.age=33;
    console.log(myObj.age);//o/p would be 33
}
anotherAgeChanger(person);
console.log(`The person's age is ${person.age}`);//o/p would be 33
