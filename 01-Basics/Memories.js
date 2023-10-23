// In JS there are two types of memories
//  Stack and Heap
//  Stack is  used by Primitive data types that is why a copy of the original value is provided
//  Heap is used by the Non-Primitive data type that is why the address of the original value is given changes can  be made in the original value itself
let MyFirstName="Aditya";
let anotherName=MyFirstName;
anotherName="Babu";
console.log(MyFirstName);
console.log(anotherName);

let userOne={
    email:"adityakarki@gmail.com",
    age:22
};
let userTwo=userOne;
userTwo.email="aditya@gmail.com";
console.log(userOne.email);//output is aditya@gmail.com
console.log(userTwo.email);//output is aditya@gmail.com
//above two console logs tells us that Non-Primitive data types uses Heap memory which is a call by 
//reference, so any changes made will be reflected in the original copy itselflet MyFirstName="Aditya";
