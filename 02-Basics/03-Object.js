//There are two ways of dieclaring an object
//  1. Literal  2.Constructor
//  When we declare an object using the constructor there comes the concept of singleton which means whenever we create an object using constructor singleton object is made which is one of a kind
//  Wheras while we declare an object using the literals singleton object is not made


//  Declaring an object using literals
const JsUser={}; //elements within the curly braces are objects as of now it is an empty object

const anotherUser={ //objects are made up of key value pairs and keys are treated like strings inside the compiler
    name:"Aditya",
    age:22,
    location:"Bomdila",
    email:"adityakarki201@gmail.com",
    }

//two ways of accessing the individual key value pairs inside an object
console.log(anotherUser.name);