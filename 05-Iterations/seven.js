//Here we will be learning reduce method
const myNums=[1,2,3];
const myTotal=myNums.reduce(function(acc,curVal){//it also takes callback function but just for understanding purpose we've written the normal function takes two arguments as parameters accumulator and current Value
    return acc+curVal;//curVal is the current value from the array which initially would be 1
},0);//since acc does not know from where to start hence we've to give its initial value as 0 after that the added value will be assigned to the accumulator
console.log(myTotal);