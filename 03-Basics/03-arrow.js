const user={
    userName:"Aditya",
    price:999,
    WelcomeMessage: function(){
        console.log(`Hi ${this.userName} welcome to the course!`);//this keyword referes to the current context
        console.log(this);
    }
}
console.log(typeof this); //this is an object
console.log(user["WelcomeMessage"]);//not able to access the function  using the square bracket method from an object
//below is how we access the function declared inside a object
user['WelcomeMessage']();



// user["userName"]="Karki";
// user.WelcomeMessage();

//Now lets see what happens if we console.log this keyword inside the function 
user.WelcomeMessage();//The function triggered which ultimately triggers the log of this keyword which outputs the whole object

//Now if we log this keyword here as given below
console.log(this);//gives us an empty object {}, but if try the same inside the console of the browser it give output as window which is also correct the reason being browser has js engine inside it and wants to know whatever is happening which could be done by the window object whereas the node is an independent engine hence no global object


//Understanding this inside the empty function
function understandingThisInsideEmptyFunction(){
    console.log(this);
}
//understandingThisInsideEmptyFunction(); //You should run it to see the output because it is very long

function understandingThisInsideFunction(){
    const userName='8348';
    console.log(this.userName);//Undefined, this does not work inside the function
}
understandingThisInsideFunction();


//This keyword inside a normal function within an object as shown in line no. 1 user object there the this keyword is referencing the user object
//Lets see how this keyword works under the arrow function
const user1={
    userName: "Adi",
    userId:23,
    welcomeMsg: ()=>{
        console.log(`Welcome ${this.userName}`)//this.userName is undefined
        console.log(this);//{} empty object is the output
    }
}
user1.welcomeMsg();
//even if we run this keyword inside the arrow function in the browser the output is undefined



//arrow functions
//syntax: (parameters) => {function definition}
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3));

//another way of writing arrow function is using implicit return, it means if we don't have to write return keyword if we have only one line of code

//const addThree= (num1,num2,num3)=>  num1+num2+num3;

//if curly braces is included in the function definition then we have to include the return keyword else if bracket is included no return keyword is requried

const addThree= (num1,num2,num3)=>  (num1+num2+num3);

//Now if we have to return an object from a arrow function it can be done as follows:
const add = () => ({username:"Aditya"});
