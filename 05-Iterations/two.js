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
// Map is an object holding key value pairs
// It is a collection of key value pairs
// Keys are unique in maps can't be repeated after once used
// Map object can be iterated using the for of loop
// It remembers the original insertion of the keys
// Objects has been used as maps historically


// There are some differences that make map prefereable over objects in some cases
// 1. Maps doesn't contain keys by default, we've to explicitly put keys into it
//    Whereas object has a prototype so it contains default keys that could collide with our own keys if not careful
// 2. A map is safe to use because of user defined key value pairs
//    Wheras if we've user defined key value pairs inside an object it may allow the attacker to override the object's prototype leading to object injection attacks
// 3. A map's key can be any value (including functions, objects, or any primitive)
//    Wheras the key of an object must be either a string or a symbol
// 4. Size of a map can easily be retrieved using Map.size property
//    Wheras for object it is more roundabout we've to do Object.keys().length
// 5. Maps are iterated using the for of loop
//    Wheras objects are iterated using the for in loop


const map= new Map();

//To set a value inside the map we do as follows
map.set('a', 100);
map.set('b', 200);
map.set('z', 1000);

//This is how we get a value from the map
// console.log(map.get('z')); // 1000


//This is how we override something inside the map
map.set('a', 500);
// console.log(map.get('a'));

// console.log(map); //Map(3) { 'a' => 500, 'b' => 200, 'z' => 1000 }

// console.log(map.size);// 3

map.delete('z');
// console.log(map);
// console.log(map.size);

for (const i of map) {    
    // console.log(i); 
    
    
    //Its output is:
    // [ 'a', 500 ]
    // [ 'b', 200 ]
}

for(const [i,j] of map){
    // console.log(j);
    
    
    //Its output is:
    // 500
    // 200
}
for(const [i, ] of map){
    // console.log(i);
    
    
    //Its output is:
    // a
    // b
}

//Without using the loops also we can get the keys as
console.log(map.keys());

// Setting object properties works for  map objects as well and can cause considerable confusion
// It works but should not be used, below is an example
const wrongMap=new Map();
wrongMap['js']='JavaScript';
wrongMap['C++']='C plus plus';
wrongMap['R']='Ruby On Rails';
// console.log(wrongMap); //o/p: Map(0) { js: 'JavaScript', 'C++': 'C plus plus', R: 'Ruby On Rails' }

//In the above output normally we used to get Map(size), here we got 0 it should have been 3
//The way we've set the data it does not interact with the map data structure
//It uses the feature of the generic object


// console.log(wrongMap.has('js')); //o/p: false; but it should be true

//the correct way of storing the data into map is using set method

//Array can also be converted into maps
const arr=[
    ['key1','value1'],
    ['key2','value2']
];
const convertedArrayIntoMap=new Map(arr);
// console.log(convertedArrayIntoMap);
// console.log(convertedArrayIntoMap.get('key2'));

//We can also convert the map into an Array using
// console.log(Array.from(convertedArrayIntoMap)); //converts into 2-D array as declared above 

//console.log([...convertedArrayIntoMap]); //converts into 2-D array as declared above 
console.log(convertedArrayIntoMap.keys());


//Just like arrays maps can also be merged using the spread operator

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


