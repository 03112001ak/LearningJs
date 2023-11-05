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
//while loop
let n=1;
while(n<=10){
    console.log(n);
    n+=2;
}


//do while loop
let score=1;
do{
    console.log(`The score is ${score}`);
    score++;
}
while(score<=10);
//the statements within the do will run until the condition inside the while is not met and even if it does not match it will run atleast once, for eg give the value of score=11 above, the statements within the do will run for sure and then the condition is checked