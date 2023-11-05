const mail="@mail.com";
if(mail){//truthy value here means some value is there in the mail string, if it would have been an empty value then it would be a falsy value
    console.log(mail);
}
// Example of some falsy values are given below
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

//Example of truthy values are listed below
// truth, "0",'false'," " [], {}. function(){} //aka empty function


//Now we will learn to check the length of the empty object
const emptyObj={};
if(Object.keys(emptyObj).length===0){ //Object.keys(emptyObj) returns an array of keys
    console.log("It is equal to zero");
}

//false==0 will return true;
//0=='' will also return true;
//false='' will also return true;

//Some logical operators used in the code are listed below
// && all of the conditions should be true for it to be true
// || one of the conditions should be true for it to be true
// Nullish Coalescing Operator (??) : It works only on null or undefined
let val1;
//val1=5??10;//Its output is 5;
//val1=10??null;//Its output is 10;
//val1=undefined??30; //Its output is 30
//val1=undefined??null; //Its output is null
val1=null??10??20;//It will always take the first value apart from null i.e. 10
console.log(val1);



//Nullish Coalescing Operator (??) and ternary operator are different
let ans=10;
ans>35?console.log("Pass"):console.log("Fail");//ternary operator