// const date=new Date();
// const newTime=date.toLocaleTimeString();


setInterval(() => {
    const date=new Date();
    const newTime=date.toLocaleTimeString();
    const newElement=document.createElement('span');
    newElement.innerHTML=`${newTime}`;
    document.querySelector('.time').innerHTML=newTime;
}, 1000);