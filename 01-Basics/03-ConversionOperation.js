/* Need of this is because lets say we got a number in a input but we want
the operation to be done in a string, hence the need of the Conversion */

let score="Aditya";

console.log(typeof score);

//lets try and convert string into number

let valueInNumber=Number(score);
/* The above code gave the output of NaN i.e. Not a Number */

let name=String(valueInNumber);
console.log(name);  //Its output is also the NaN.

console.log(valueInNumber);

let check="33abc";
let conversion=Number(check);
console.log(typeof conversion);//its output is number
console.log(conversion); //output is NaN

let TypeOfNull=null;
let conversion1=Number(TypeOfNull);
console.log(conversion1);// Its output is 0

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //Its output is true
// 1=> true; 0=>false;
//""(empty string)=>false;
//"string Input"=>true;

//**********************************************OPERATIONS******************************************* 