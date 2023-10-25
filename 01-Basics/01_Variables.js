const accountId=12212;
let accountEmail="adityakarki2@gmail.com";
var accountPassword="12334";
accountState="Arunachal Pradesh";
let accountCity;

console.table([accountId,accountEmail,accountPassword,accountState,accountCity]);


/* We should not be using the var data type because of the block and functional scope */
//accountId=2312; //The value of the constant cannot be changed


accountEmail="yourwhosewisher@gmail.com";
accountPassword="34234";
console.table([accountId,accountEmail,accountPassword,accountState,accountCity]);