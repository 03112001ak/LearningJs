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