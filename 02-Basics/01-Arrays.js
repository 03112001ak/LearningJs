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

//In the code written below the join operators concatenates the array elements of "myArr" and converts it into strings and returns it to newArr
//By default the seperator of each element in string is comma, but we can also specify which seperator we want by giving join('-') or join(';')
const newArr=myArr.join();//It binded the newArr with the myArr and converts it to string
console.log(myArr);
console.log(newArr);

console.log("Original ", myArr);

//Slice cuts an array and returns an array whose indexes are mentioned and which comes in between but only the last parameter which is an index is only not considered as explained in the comment section below
//We can also give -ve index values inside the slice, which is understood as follows:
//Lets consider ['A','D','I']; the indexes are 0, 1, 2 to understand -ve indexing we should go from right to left 2 is for "I" 1 is for "D" and 0 is for "A" so if -1 is given that means it refers to "I" -2 refers to "D" & -3 refers to "A" here after every -ve value will refer to A only be it -4, -5, -6....
const myn1=myArr.slice(1,3)//1 and 3 are indexes, but 1 is included and 3 is not
console.log(myn1);
console.log("Slice ", myArr);//In slice there is no change in the original array (main difference between slice & splice)

//Below is the syntax of splice
//splice(start, deleteCount, item1, item2, /* …, */ itemN)
//item1, item2, /* …, */ itemN in above line is the items that we can add if we want, it is optional
const myn2=myArr.splice(1,3);//1 and 3 are indexez and both are included
console.log(myn2);
console.log("Splice ", myArr);//There is change in the original array (main difference between slice & splice)