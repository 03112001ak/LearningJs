//Here we will be learning reduce method
const myNums=[1,2,3];
const myTotal=myNums.reduce(function(acc,curVal){//it also takes callback function but just for understanding purpose we've written the normal function takes two arguments as parameters accumulator and current Value
    return acc+curVal;//curVal is the current value from the array which initially would be 1
},0);//since acc does not know from where to start hence we've to give its initial value as 0 after that the added value will be assigned to the accumulator
console.log(myTotal);//Its output is 6 because 1+2+3=6

//Now writing the same code with the help of the arrow function
const myTotal1=myNums.reduce((acc,curVal)=> acc+curVal,0);
console.log(myTotal1);

//Lets take a realistic scenario we've a shopping cart consisting of all the courses we want to buy, we have to output the total of it
const shoppingCart=[
    {
        itemName:"Js course",
        price:999
    },
    {
        itemName:"py course",
        price:599
    },
    {
        itemName:"mobile dev course",
        price:4999
    },
    {
        itemName:"Data Science course",
        price:12999
    },
]
const TotalCost=shoppingCart.reduce((acc,curVal)=>acc+(curVal.price),0);
console.log(TotalCost);