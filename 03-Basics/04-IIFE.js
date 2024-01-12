// Immediately Invoked Function Expression (IIFE) means function should be executed immediately after written
// because global variable can get polluted because of the local scopes hence to avoid that we use IIFE 


function chai(){
    console.log("Connected");
}
chai();


//The above code can also be written as follows using IIFE
//We know that bracket after chai indicates execution
//The whole function should wrapped inside the brackets and after that at last comes the brackets for function execution followed by semicolon (semicolon is very important) if we've multiple IIFE's and semicolon is not included at the end it won't know where to end the execution context
(function chai(){ //this is named IIFE
    console.log("Connected");
})(); //To end the above function it is necessary to add semicolon at the end in the IIFE

//same thing can also be written inside the arrow function
( (name) =>{ //unnamed IIFE
    console.log(`Another connected ${name}`)}
    )("Aditya");
