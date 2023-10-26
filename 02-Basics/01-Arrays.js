const myArr=[1,"Aditya",3,4,5];
const myHeroes=["Shaktiman","Naagraj"];

const myArr2=new Array(1,2,3,4);
console.log(myArr2[1]);
console.log(myArr[1]);

//Array methods

myArr.push(6);
console.log(myArr);
myArr.pop();//we should not give any value into the pop unlike the push it will automatically remove the last element
console.log(myArr);

myArr.unshift(21);//Opposite of push, 21 will be the first element of the array but the thing is it will move every other element by 1 index which can be very inefficient
console.log(myArr);
myArr.shift();//it will not take any arguments and will remove the first element 
console.log(myArr);

console.log(myArr.includes(3));//It will return either true or false depending the value is there or not
console.log(myArr.indexOf(9));//If not present it will output -1 otherwise the index itself


const newArr=myArr.join();//It binded the newArr with the myArr and converts it to string
console.log(myArr);
console.log(newArr);

console.log("Original ", myArr);

const myn1=myArr.slice(1,3)//1 and 3 are indexes, but 1 is included and 3 is not
console.log(myn1);
console.log("Slice ", myArr);//In slice there is no change in the original array (main difference between slice & splice)

const myn2=myArr.splice(1,3);//1 and 3 are indexez and both are included
console.log(myn2);
console.log("Splice ", myArr);//There is change in the original array (main difference between slice & splice)