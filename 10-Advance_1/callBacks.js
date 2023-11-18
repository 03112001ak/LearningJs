//CallBack function are those functions which are sent as an argument to another function
//A callBack function can run after another function has finished

//A javascript function is executed in accordance to they are called not in accordance of there function definition are written
//Example of callBack function is given below

function myDisplayer(number){
    console.log(`The sum of the two numbers is:- ${number}`);
}
function sum(num1, num2, myCallBack){//function sent as arguement inside another function and please remember not to use the parenthesis while sending function as arguement we do not want it to execute
    const ans=num1+num2;
    myCallBack(ans);//This function won't be executed until the above statement is computed
}
sum(1,2,myDisplayer);

//The use of callBack is mostly understood while doing asynchronous programming where one function  has to wait for another function(like waiting for a file to load), it says by the time I call this function back do this thing
