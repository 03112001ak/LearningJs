// const button=document.querySelector('.button');
// const previousGuesses=[];
// //let guess=10;
// //while(guess>0){
//     button.addEventListener('click',()=>{
//         const input=parseInt(document.querySelector('input').value);
//         if(isNaN(input)){
//             alert('Please Enter a Valid Number');
//         }
//         else{
//             let random=Math.floor((Math.random()+1)*100);
//             previousGuesses.push(input);
//             document.querySelector('.guess').innerText=previousGuesses;
//             if(random===input){
//                 alert('You ve won the game');
                
//             }
//             guess--;
//             //document.querySelector('.value').innerHTML.replace(guess);
//         }
//     })
// //}


//random number generation
function randomNo(){
    let random=Math.floor((Math.random()+1)*100);
}

function NumberChecker(){
    let inputHolder=document.getElementsByTagName('input');
    console.log(inputHolder);
}
NumberChecker();