const score=400;
console.log(score);

const balance=new Number(400);//we can get access to more properties and methods using this.
console.log(balance);

console.log(balance.toString().length);//we changed the balance to string and output the lenght of it

console.log(balance.toFixed(2));//its output is 400.00 it adds 2 0's after decimal as asked within the method itself

const FloatNumber=123.3933;
console.log(FloatNumber.toPrecision(4)); //Its output is 123.4 works as set precision operator in C++

const hundreds=100000000;
console.log(hundreds.toLocaleString()); //puts commas in between the numbers to make it more readable by default American place value system
console.log(hundreds.toLocaleString('en-IN')); //This makes it in Indian place value system



//Maths library comes default with the javascript language

console.log(typeof(Math)); //Math is an object
console.log(Math.abs(-4));//Changes -ve values to +ve not the other way around
console.log(Math.round(4.6));//If the value is more than 5 after decimal it will round off the to 1 more than that
console.log(Math.ceil(4.2));//If the value is slightly greater than the number eg 4.2>4 than its output is going to be 5
console.log(Math.floor(4.7)); //It is the opposite of ceil its output is going to be 4

console.log(Math.random());//It gives random values between 0&1 0 & 1 both are not included in this

console.log(Math.floor(Math.random()*10));//Here the o/p can also be 0 because it will give the floor value
//if we want to avoid 0 from the output than we need to add 1 to it
console.log(Math.floor((Math.random()*10)+1));


//let say we want a random numbers in a certain range 

let min=10;
let max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);