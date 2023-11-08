const buttons=document.querySelectorAll('.button')
const body=document.querySelectorAll('.body');
buttons.forEach((button)=>{
    button.addEventListener('click',function(event){
        console.log(event);//clicking is an example of event
        console.log(event.target);//event.target means on which target the click is happening
        if(event.target.id==='gray'){
            document.body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='white'){
            document.body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='blue'){
            document.body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='yellow'){
            document.body.style.backgroundColor=event.target.id;
        }
    })
})
