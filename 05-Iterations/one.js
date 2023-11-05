//for loop
for(let j=1;j<=10;j++){
    console.log(j);
}
//We can also write nested loop 

let myArray=["Batman","Superman","Flash"];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}


//some keywords used to terminate the loop if a certain condition is met are mentioned below
//break, continue

//let see the working of the continue keyword
for(let i=1;i<10;i++){
    if(i==5){
        console.log(`Detected ${i}`);
        continue;
    }
    console.log(i);//because of continue 5 will not be printed(skipped) and rest all will be
}
//while loopv