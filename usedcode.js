console.log('arham')
console.log('i am ok ')
let written = 'me' ;
console.log(written)
let why = ["w" , "aio"]
console.log(why[1])
 //reserved keywords cant be used as variables 
//try to name as colse ot their fucntion as posible 
//variable cant start with a number 
// cant contain a space or an hypen (-)
//[] array is defind like this each value given in a double colon
//sepertated commas ,
//javascript is a case sensitive language 
//const to be used  to prevent it form changing througout
//value types/Primitives - Strings numbers buliennds
let firstName = 'first name'
let firstname = ' second name'
console.log(firstName)
console.log(firstname)
let a = 1 
let b = 3 
console.log(a + b)
let name = 'mosh' //string 
console.log(name)
let num = 9 //NUmber literal
let isApproved = false //boolien literal 
let selectedcolour = null //when we wnat to clear a value of a variable 
// DYNAMIC LANGUAGE = type of varicable can change in run time 


// refference types obejects - 
// a sring to be defined as a string it needs to be put in colons
let person = {
   name2: 'arham' ,
   age2 : 17 
};

console.log(person);
//dot notation
console.log(person.name2)
person.name2 = 'wani' 
console.log(person.name2)

function hell(parameter){ // parameter is a variable which is effective indide this function
   //body of the function
   console.log('function statement' + parameter)
 
 }
 
 hell('shayatan');
 hell('iblees');