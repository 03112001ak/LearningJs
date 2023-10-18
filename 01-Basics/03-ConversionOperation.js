let score="Aditya";

console.log(typeof score);

//lets try and convert string into number

let valueInNumber=Number(score);
/* The above code gave the output of NaN i.e. Not a Number */

let name=String(valueInNumber);
console.log(name);  //Its output is also the NaN.

console.log(valueInNumber);