//Here we will be learning how to run a loop over an object
const myObj={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

//We will be using here the for in loop
for(const i in myObj){
    console.log(i);
}
//the above loop o/ps all the keys in the object
// js
// cpp
// rb
// swift

//Here we will be printing the key value pairs within the object
for(const i in myObj){
    console.log(`Key is ${i}, and the value is ${myObj[i]}`);//if we use dot instead of the square bracket we get value as undefined
}


//Lets use the for in loop for arrays and lets see what it prints
const programming=["js","rb","py","java","cpp"];
for(const i in programming){
    console.log(i);
}
//It prints the index values of all the elements inside the array which is also a type of key for all the values
//To print the values we can write the code as follows

for(const i in programming){
    console.log(programming[i]);
}
//Its output is as follows:
// js
// rb
// py
// java
// cpp

//Here we got to know the difference between the for of loop and for in loop, the for loop o/ps all the values and the for in loop o/ps all the keys



//If we run a for In loop for a map there will neither be an output nor and error, it simply is uniterable using the for in loop