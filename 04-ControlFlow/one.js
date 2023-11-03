//if statement, let sunderstand with only one example
if(2=="2"){ //here the first 2 is of type number and other is string, this condition is supposed to be false but the code gets executed because of wrong operator, the correct operator is given in line number 5
    console.log(`Code is executed`);
}
if(2==="2"){ //this code will not execute because === operator also checks the data type 
    console.log("Code not executed");
}

//Lets again understand the scopes within the if statements
const score=100;
if(score){
    let power="fly";
    console.log(`Power is to: ${power}`);
}
//console.log(`Power is to: ${power}`);//This will give power because the variable power is not accessible from outside the scope of if statement

if(score){
    var power1="run";
    console.log(`Power is to: ${power1}`);
}
console.log(`Power is to: ${power1}`);//This won't give any error because var has global scope hence we should not use it

//There is again another way of writing if statement which is shorthand
const balance=1000;
if(balance) console.log(`There is some balance`); //Semi colon is mandatory, multiple lines also possible but have to use comma and at the end followed by semicolon but not a very good practice eg is shown below

//if(balance)  console.log(`There is some balance), console.log(`The balance is ${balance}`);
