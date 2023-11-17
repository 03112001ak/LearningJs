//The below written code is how promises are made
const promiseOne=new Promise(function(resolve, reject){ 
    setTimeout(()=>{
        console.log('Well this is promiseOne');
        resolve();
    },1000)
    
})

//Below written code is how promises are consumed
promiseOne.then(()=>{
    console.log('PromiseOne is resolved');
})