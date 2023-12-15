//Function is a block of code that can be accessed anywhere in the program and its copy would be provided to us
function sayMyName() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
sayMyName; //it is a reference to the function and it does not give any output, we are just telling the program that the function lives there and nothing else
sayMyName();//If we combine bracket after the function name/function reference than it becomes function execution
function addTwoNumbers(num1,num2){//num1,num2 are parameteres 
    console.log(num1+num2);
}
addTwoNumbers();//Its o/p is NaN because no argument/number is passed 
addTwoNumbers(3,null);//Its o/p is 3 
addTwoNumbers(3,5);//3&5 are arguments


function returnAddedNumbers(num1,num2){
    return num1+num2;
}
let result=returnAddedNumbers(12,23);
console.log(`Result is ${result}`);

// function logInUserMessage(username){
//     return `${username} has logged in.`
// }
// console.log(logInUserMessage("Aditya")); //If we do not give any arguements into the function call than it would print "undefined has logged in."


//To restrict the user not to provide the username we can  use if else statement into the code as mentioned below:
function logInUserMessage(username){
    if(username===undefined){
        return `Please enter the username`;
    }
    else{
        return `${username} has logged in.`
    }
    }
    console.log(logInUserMessage())

function anotherFunctionDemo(username="Adi"){//If we see the function parameter carefully you will see that Adi is assigned to the username, it will only work when no arguement is passed on the function call, if the argument is passed the argument will be printed
    console.log(`${username} is the username`);
}
anotherFunctionDemo();
anotherFunctionDemo("0311");


//There can be a situation where we do not know how many function parameters are required eg being E-Commerce Shopping Cart, user adds number of items into the cart which needs to be added
//The above problem can be solved using the rest and the spread operator both of them are same (...) there usecases make them different from each other

function calculateCartPrice(...num1){//This is the rest operator
    console.log(num1)
    console.log(typeof(num1))//It is an object
}
calculateCartPrice(10,2023,12,32,1,34,45);//o/p's the array format of this numbers

function anotherExampleOfCalculateCartPrice(value1,value2,...num1){
    console.log(num1);
}
anotherExampleOfCalculateCartPrice(10,2023,12,32,1,34,45);//here value1=10, value2=2023, and rest will be given to num1 which will be converted to array and printed in the form of array

//Let us pass objects into the function
let user={
    username:"Aditya",
    Email:"adityakarki201@gmail.com"
}
function handlingObjectUsingFunction(anyObj){
    console.log(anyObj.username);
}
handlingObjectUsingFunction(user);
//We can also pass key value pairs inside the function as follows:
handlingObjectUsingFunction({
    username:"Aditya",
    Email:"adityakarki201@gmail.com"
});

//We will see a function taking array as input then printing the second element on it
let MyNewArray=[100,200,334,345,211,091];
function printingSecondElementFromTheArray(getArray){
    return getArray[1];
}
//console.log(printingSecondElementFromTheArray(MyNewArray));
//line number 83 can also be done as follows:
console.log(printingSecondElementFromTheArray([100,200,334,345,211,091]));
