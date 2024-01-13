const myDate=new Date();

console.log(typeof(myDate)); //It is an object

console.log(myDate);//Its output is 2023-10-25T03:41:53.616Z (not understandable at the end)

console.log(myDate.toString());//Its output is Wed Oct 25 2023 03:42:56 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Wed Oct 25 2023 is the output

console.log(myDate.toLocaleString());// 10/25/2023, 3:44:10 AM is the output 

const myCreatedDate=new Date(2023,0, 3);//Count of the month always starts with 0, 0 is for January
console.log(`My Created Date is ${myCreatedDate}`);//My Created Date is Tue Jan 03 2023 00:00:00 GMT+0530

console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());

const myAnotherCreatedDate=new Date(2023,10,3,24,0,0);
console.log(myAnotherCreatedDate.toLocaleString());

const anotherFormatOfDate=new Date("01-30-2001"); //we have defined our own format as MM/DD//YYYY;
console.log(anotherFormatOfDate);//Tue Jan 30 2001 00:00:00 GMT+0530 //In string we've to specify month from 1-12, 1 for Jan & 12 for Dec

let myTimeStamp=Date.now();
console.log(myTimeStamp); //It is millisecond value from 1st Jan 1970 till today
console.log(anotherFormatOfDate.getTime()); //It is also millisecond value from 1st Jan 1970 till 11-03-2001

// if we want to convert the above milliSecond into seconds than we have to do the following
console.log(Date.now()/1000);//Its output is 1698213450.215 seconds, if we don't want numbers after decimals than we can do the following

console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);//by default the count starts with 0 hence not to make end user confuse we added 1 to it
console.log(newDate.getDay());

//Below is a very important method using which we can customize our dates
console.log(newDate.toLocaleString('default',{
    weekday: "long"
}))
