// var is a globed scope and same variable can be redeclared with var
var mar=9;
var let =9;
var mar="Man";
console.log(let);
console.log("Myname is Roman gurung.");

var mar=undefined;
var mar=null;

// let is a blcked scope.same variable cannot  be redeclared with let.

// let ab="fast"; will get error  if redeclared.
let ab=900;
{
let ab=90
    console.log(ab);
}

// Primitive in JS 
// nn bb ss u
let a=null;
let b=345;
let c=true;
let d=BigInt(578) +BigInt("2");
let e="Harry";
let f= Symbol("I am a nice symbol")
// let g=undefined;
let g;

console.log(a,b,c,d,e,f,g);
console.log(typeof f);

// Non Primitive Data types -Objects in JS
const item ={
    "Harry":true,
    "Subh":false,
    "Loves":1000,
    "Rohan":undefined
}
console.log(item["Subh"]);
console.log(item);
console.log(item["asa"]);
// HENCE THERE is no asa variable  inside item objects. BUt not showing error.Here I see 
// forgiving in Object  in js.

NOTE:
// BHITRA OBJECT KO CONSOLE MA UNDELARED VARIABLE INPUT GARYO BHAINE UNDEFIONED MESSAGE AUNXA

// BUT IN BLOCK AND OUTSIDE OUT OF OBJECT KO VARIABLE CONSOLEMA INPUT GARYO BHANE SIDAI ERROR DEKHAUNXA
// IN NODEJS.AND CHECK BELOW:::
// console.log(harry);
{
    // console.log(ram);
}
