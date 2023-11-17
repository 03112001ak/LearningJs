//The below written code is how promises are made
const promiseOne=new Promise(function(resolve, reject){ //Promise takes callback function as arguement
    setTimeout(()=>{//Does async tasks like DB calls, cryptograhy(password stuff), network etc but for here as an eg we took setTimeout
        console.log('Well this is promiseOne');
        resolve();//This function must be executed for the consumption code(11-13) to work
    },1000)
    
})

//Below written code is how promises are consumed
promiseOne.then(()=>{
    console.log('PromiseOne is resolved');
})


//Now in line we can do both create and consume promises
new Promise(function(resolve,reject){
   
    setTimeout(()=>{
        console.log('Well this is promiseTwo')
    });
    resolve();
}).then(()=>{
    console.log('PromiseTwo resolved');
})

//Lets assume that while creating an instance of promise we are asking some data from the database, the data will be processed by the "then", so we need to send the data which is recieved while creating the instance to "then" which can be done using resolve()
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Assume data is called here');
        resolve({username:'Adi',    //mostly the data will be passed as an objec
                email:'adityakarki201@gmail.com'});
    },1000)
})

promiseThree.then(function(user){//all the data will be proccessed here, user will the reference for the object passed from above using the resolve();
    console.log(user);
})


//Lets learn now how the reject works
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error='true';
        if(error==='true'){
            resolve({username:'@okSbi', password:'123'});
        }
        else{
            reject('ERROR: you are not registered in our website');
        }
    },1000)
})
//we know that "then" is resolve and "catch" is for reject and both of them take function as input
promiseFour.catch((err)=>{ //this is how the catch works for the reject
    console.log(err);
})

//Using the same instance promiseFour we'll try to access the properties of the object

// promiseFour.then((user)=>{ 
//     console.log(user.username);//this way does not work
// })

// const Username=promiseFour.then((user)=>{
//     return user.username; //again this also does not work 
// })



//To get into the properties of the object we need to do chaning of then as follows 
promiseFour. then((user1)=>{
    return user1.username;//whenever we return from a function inside the "then", it can only accessed using another chained "then" as shown below it is also called chaining;
})
.then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
})