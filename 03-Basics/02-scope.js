//  let a=10;
//  const b=20;
//  var c=1000;

//  if(true){
//     console.log(c);
//     var c=23;
//     console.log(a);
//     let a=45;
//  }
//  console.log(c);
//  console.log(a);
let a=1;
var b=2;
console.log(`This is a ${a}`);;
console.log(`This is b ${b}`);
if(true){
   let a =100;
   console.log(`This is a under the local scope of let ${a}`);
   var b=200;
   console.log(`This is b under the local scope of var ${b}`);
}
console.log(`This is a under the global scope of let ${a}`);
console.log(`This is b under the local scope of var ${b}`);


//scopes within a function and closures
function one(){
   const courseName="Web Dev";
   function two(){
      const courseId="0001";
      console.log(`This is from the inner function ${courseName}`);
   }
   two();
   console.log(`This is from the outer function ${courseId}`); //Error is courseId is not defined which is correct because it is only defined within the function two hence cannot be accessible from function one but every variable on function one can be accessible by the function two
}
one();
//closure can also be defined as the inner function can access the variable of the outer function 

//There are two ways of declaring a function
function add(num){
   return num+num;
}
const add=function(num){//here a function is declared + the value is holded inside the add variable aka hoisting
   return num+num;
}