// for of loop, syntax is given below
// for (const iterator of object) {//here object does not mean key valuep pair, it means on which thing you want the loop to be applied
    
// }
//some examples of for of loop are mentioned below
const myArray=[1,2,3,4,5];
for(const i of myArray){
    console.log(`The values are: ${i}`);
}

const greetings="Hello World!";
for(const i of greetings){
    if(i==" ")  break;
    console.log(`${i}`);
}

//Maps
//Maps is a object which has a unique collection of key value pairs
const map=new Map();
map.set('IN',"India");
map.set('US',"United States Of America");
map.set('FR',"France");
map.set('IN',"India");//Trying to set a duplicate value
console.log(map);//the duplicate value will not be printed

//using for loop to print the key value pairs in the map
for(const i of map){
    console.log(i);
}
//Its output is as follows
// [ 'IN', 'India' ]
// [ 'US', 'United States Of America' ]
// [ 'FR', 'France' ]

//What if we want only keys, it can be done as follows
for(const [i] of map){
    console.log(i)
}
//Its output is as follows
// IN
// US
// FR

//What if want only values, it can be done as follows
for(const [,j] of map){
    console.log(j);
}
//Its output is as follows
// India
// United States Of America
// France

//What if we want both of them, it can be done as follows:
for(const[i,j] of map){
    console.log(`Key is:- ${i}, Value is:- ${j}`);
}
//Its output is as follows
// Key is:- IN, Value is:- India
// Key is:- US, Value is:- United States Of America
// Key is:- FR, Value is:- France


//Lets run a for loop over an object, the code are written below
const myObj={
    game1: "NFS",
    game2: "Spiderman",
    game3: "Asphalt"
}
// for(const i of myObj){
//     console.log(i);
// }

// for(const [i,j] of myObj){
//     console.log(`Key is:- ${i}, Value is:- ${j}`);
// }

//When we used for of loop over the myObj in the above it gave us error by saying "myObj is not iterable" which means we can't iterate over Objects using for of loop


