// const height=document.querySelector('#cm');
// const weight=document.querySelector('#kg');
// console.log(`${height}, ${weight}`)

// let height=0;
// let weight=0;
// let ans=0;
// document.addEventListener('input',(even)=>{
//     let height=0;
//     let weight=0;

//     if(even.target.id==='cm'){
//         height=even.target.value;
//     }
//     height=height*height;
//     console.log(height);
//     if(even.target.id==='kg'){
//         weight=even.target.value;
//     }
//      ans=weight/height;
//     alert(`Your BMI is ${ans}`)
//     //console.log(weight);
// })


document.getElementById('button').addEventListener('click',(event)=>{
   const height=parseInt(document.querySelector('#cm').value);
   const weight=parseInt(document.querySelector('#kg').value);
   //console.log(`Height is ${height}, weight is ${weight}`)
    // alert(`Now The BMI could be calculated ${ans}`)
   const bmi=(weight/((height*height)/10000)).toFixed(2);
   const newElement=document.createElement('span');
   newElement.innerHTML=`${bmi}`;
   document.querySelector('.hei-wei').appendChild(newElement);
   console.log(newElement)
//    alert(`Your BMI is ${bmi}`)

})