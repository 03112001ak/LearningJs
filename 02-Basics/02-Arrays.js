const marvel_heroes=['Thor','Ironman','Spiderman'];
const dc_heroes=['Superman','flash','batman'];

//marvel_heroes.push(dc_heroes);//dc_heroes will get pushed inside marvel_heroes as an array and will be the 4th element of the marvel_heroes
//console.log(marvel_heroes);

//console.log(marvel_heroes[3][0]);//Its output is going to be Superman not a good syntax

marvel_heroes.concat(dc_heroes);
console.log(marvel_heroes);//This will give the output as 'Thor','Ironman','Spiderman' but wanted 'Thor','Ironman','Spiderman','Superman','flash','batman'

const concat_array=marvel_heroes.concat(dc_heroes);
console.log(concat_array);