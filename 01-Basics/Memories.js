// In JS there are two types of memories
//  Stack and Heap
//  Stack is  used by Primitive data types that is why a copy of the original value is provided
//  Heap is used by the Non-Primitive data type that is why the address of the original value is given changes can  be made in the original value itself
let MyFirstName="Aditya";
let anotherName=MyFirstName;
anotherName="Aditya";
console.log(MyFirstName);
console.log(anotherName);