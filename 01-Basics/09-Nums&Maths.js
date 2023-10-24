const score=400;
console.log(score);

const balance=new Number(400);//we can get access to more properties and methods using this.
console.log(balance);

console.log(balance.toString().length);//we changed the balance to string and output the lenght of it

console.log(balance.toFixed(2));//its output is 400.00 it adds 2 0's after decimal as asked within the method itself

const FloatNumber=123.3933;
console.log(FloatNumber.toPrecision(4)); //Its output is 123.4 works as set precision operator in C++

