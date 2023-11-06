const myNumbers = [1,2,3,4,5,6,7,8,9,10];
//Now lets say I want to add 10 to all the array elements above it could be done using map

const newNums=myNumbers.map((items)=> items+10)//It also takes callback function as arguments and returns hence we've to capture the output inside new variable
console.log(newNums);

//Doing the same thing with the help of for each loop
myNumbers.forEach((items)=>{
    console.log(items+10);
})


//We can also do "chaining" or we can say concatenation of two or more methods in a single line
const learningChaining=myNumbers
            .map((items)=>items*10)//all the array will multiply by 10 in this line 
            .map((items)=>items+1)//the multiplied array will be added with 1 in this line 
            .filter((items)=>items>40);//and then the filter will be applied on the array and then assigned to the variable called learningChaining
//We could have written all of the three lines in one but for understanding purpose we've written like that