//Here is a loop we will be using the most i.e. for each loop
const coding=["js","ruby","java","python","cpp"];


//steps to write the for each loop
//for each loop is method inside the array 
//coding.forEach()//within the brackets we need to write function

// coding.forEach(function name()){ //This is how we would normally write a function

// }

coding.forEach(function (i){//Function name should not be there because it is a callback function and the parameter inside the function refers to individual array elements which are called individually
    console.log(i);
})


//the above code can also be written using the arrow function as follows:
coding.forEach((i)=>{
    console.log(`This is using the arrow function ${i}`);
})

//We can also write a function independently and pass its reference inside the forEach loop as follows:
function printArrayElements(i){
    console.log(`This is using the independently written function and passed as reference ${i}`);
}
coding.forEach(printArrayElements)//Notice we've not included the bracket after the function reference because we don't want to execute the function because the foreach loop is so wise that it knows when and how to execute the function hence only reference is passed


//foreach loop takes max of 3 parameters they are item, index, arr (whole array elements) example is written below
coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})

//Now lets see how we can array of objects using the foreach loop

const arrayOfObj=[
    {
        lang:"JavaScript",
        extension: "JS"
    },
    {
        lang: "C++",
        extension: "CPP"
    },
    {
        lang:"Python",
        extension:"Py"
    }
]
let i=1;
arrayOfObj.forEach((item)=>{
    console.log(`${i} element is ${item.lang}`);
    i++;
})