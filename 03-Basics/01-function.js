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