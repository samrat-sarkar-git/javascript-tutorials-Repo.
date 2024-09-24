//constants can not be changed if once defined
//variables can be changed anytime whenever needed
const accountId=2345232
let accountEmail = "samratsarkar@gmail.com"
var accountPassword="1234565"
accountCity="Kolkata" //should not be used but variables can be defined without using any keyword of let or var


let accountState //variable is declared but if the variable is not initialised with certain value it will be automatically filled with value undefined

// accountId=4532 -- not allowed when defined with const keyword

accountEmail="Piku@gamil.com"
accountPassword="2002"
accountCity="Bangalore"
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
const --> used to define constants ,once defined using const keyword that cannot be changed further

let --> mostly used to define variables

var --> prefer not to use var because of issue in block scope and functional scope
*/