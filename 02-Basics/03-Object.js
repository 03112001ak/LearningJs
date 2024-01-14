//There are two ways of dieclaring an object
//  1. Literal  2.Constructor
//  When we declare an object using the constructor there comes the concept of singleton which means whenever we create an object using Object.create constructor singleton object is made which is one of a kind
//  Wheras while we declare an object using the literals singleton object is not made


//  Declaring an object using literals
const JsUser={}; //elements within the curly braces are objects as of now it is an empty object

const anotherUser={ //objects are made up of key value pairs (key value pairs are aka properties) and keys are treated like strings inside the compiler
    name:"Aditya",
    age:22,
    location:"Bomdila",
    email:"adityakarki201@gmail.com",
    }

//two ways of accessing the individual key value pairs inside an object
console.log(anotherUser.name);
console.log(anotherUser["name"]);//If you compare line 18 and 19, you will see name is in inverted commas in this one because keys are treated like strings but using dot operator we don't need to use it
//we should be using line number 19 code

//reasons for using the code for line number 19

const declaringSymbol=Symbol("mySym1");//this code creates a new symbol with the description mySym1 and assigns it to the variable
//const declaringSymbol=Symbol["mySym1"];//This code attempts to access a non-existent property on the Symbol object, which when logged will output undefined
console.log(declaringSymbol);
console.log(typeof declaringSymbol);


const understandingLine19={
    "name":"Aditya", //key is deliberately given in string 
     [declaringSymbol]:"anotherKey" //this is how a key whose data type is symbol is given a value  
}
console.log(understandingLine19["name"]);//we can not use dot operator in here because as we see above name is in double quotes 
//Since symbol comprises of unique values, hence we do not have to use inverted commas explicitly for other values we need to use it
console.log(understandingLine19[declaringSymbol]);// Here declaringSymbol is a key of type symbol hence square bracket has to be used
console.log(declaringSymbol);//Here declaringSymbol is a variable which holds a value

//The above written are some few reasons why we should be ignoring the dot operator to retrieve any key value pair in the object


//Changing the values in an object
understandingLine19["name"]="Karki";
console.log(understandingLine19["name"]);

//We can also freeze an object as written below
//Object.freeze(understandingLine19);//The object understandingLine19 cannot be overwritten from now

understandingLine19.greetings=function(){
    console.log("Hi welcome to JavaScript");
}
console.log(understandingLine19.greetings); //output is  [Function (anonymous)]
console.log(understandingLine19.greetings());//output is Hi welcome to JavaScript and in another line undefined is coming

//[Function (anonymous)] means function has not been executed but reference of a function has come
