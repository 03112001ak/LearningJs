const marvel_heroes=['Thor','Ironman','Spiderman'];
const dc_heroes=['Superman','flash','batman'];

//marvel_heroes.push(dc_heroes);//dc_heroes will get pushed inside marvel_heroes as an array and will be the 4th element of the marvel_heroes
//console.log(marvel_heroes);

//console.log(marvel_heroes[3][0]);//Its output is going to be Superman not a good syntax

marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);//This will give the output as 'Thor','Ironman','Spiderman' but wanted 'Thor','Ironman','Spiderman','Superman','flash','batman'

const concat_array=marvel_heroes.concat(dc_heroes);//But if we want the concat function to work as desired than we need to know to store it in another variable because it returns a new array which needs to be stored and then displayed
console.log(concat_array);


//another famous and most used to join two arrays is using spread operator
const all_new_heroes=[...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);

//the limitation in concat being, we can only merge one array onto another but in spread it is not like that we can merge any number we want

const arrayWithinArray=[1,2,[3,4],5,6,[7,8,[9,0]]];
//Sometimes if we want to change nested array into one normal array it can be done as follows
const ConvertedIntoOneArray=arrayWithinArray.flat(3);//arguement 3 means till 3rd level depth I want my arrayWithinarray to be converted into one array
console.log(ConvertedIntoOneArray);

//We can also check that if the given value is an array or not using the following
console.log(Array.isArray("Aditya"));//Its O/P is false as it is an string

//We can change the given thing into array using the following
console.log(Array.from("Aditya"));

//Lets give an object as an arguement inside the from method
console.log(Array.from({name:"Aditya"})); //Its O/P is an empty array because we need to tell it to make array of keys or values if it can't make an array out of it than it will return empty array


let score1=100;
let score2=200;
let score3=300;

console.log(array.of(score1,score2,score3)); //of is a method that can combine any variables holding individual values into arrays