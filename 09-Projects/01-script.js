//Color generator
const colorGenerator=function(){
    const hex="0123456789ABCDEF";//colors are the combination of 6 hex codes, which will be chosen from this
    let color="#";//colors always starts with the # sign

for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];//here we will use random numbers which would be used as an index for hex variable to choose the value from it
    }
    return color;
}

const BodyColorChanger=function(){
    document.body.style.backgroundColor=colorGenerator();
}

const start=document.getElementById('start');
const stop=document.getElementById('stop');
let intervalSetter;

start.addEventListener('click',function(){
    intervalSetter=setInterval(BodyColorChanger,1000);
    
})

stop.addEventListener('click',function(){
    clearInterval(intervalSetter);
    intervalSetter=null;//This is how a professional writes a code, whenever someone's work is done, it is better to assign them null
    document.body.style.backgroundColor='white';
})

