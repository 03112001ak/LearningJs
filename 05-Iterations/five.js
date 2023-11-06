const coding=["js","ruby","java","python","cpp"];

const values=coding.forEach((item)=>{
    console.log(item);
})
console.log(values);//Its value is undefined

//We are doing this because although we have not got the correct output, we will not always print all the values of the array, sometimes we got to find some specific value by traversing through the whole array 

const values2=coding.forEach((item)=>{
    return item;
})
console.log(values2);//Its value is also undefined because forEach is not made to return something

//Now lets address the above written problems using another array
const MyNum=[1,2,3,4,5,6,7,8,9,10];
//MyNum.filter()//It also takes callback function as parameters and more importantly returns the value, below is the implementation of this
const NewNum=MyNum.filter((item)=>item>4);
console.log(NewNum);//Its output is [ 5, 6, 7, 8, 9, 10 ]


//Now there is usually a mistake that the beginners make while writing the code for the Filter the mistake is written below
const NewNum1=MyNum.filter((item)=>{
    item>4;//We just have added curly brackes around the call back function and made some scopes if we console log it, it will give empty array, we've learned this before whenever we use curly braces we need to use the return keyword explicitly
})
console.log(NewNum1);//Its output is []

//Here we will use the return keyword explicitly
const NewNum2=MyNum.filter((item)=>{
    return item>4;//It gives us the desired output
})
console.log(NewNum2);



//Now lets do the same thing with some minor tweeks using the for each loop
//To use for Each we know it does not return any value hence we'll create new array and while traversing through it we will check for the condition and push our value to the newly made array
const NewArray=[];
MyNum.forEach((item)=>{
    if(item>4)  NewArray.push(item);
})
console.log(NewArray);
