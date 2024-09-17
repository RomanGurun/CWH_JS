// Literals represent values in JavaScript.
//  These are fixed values—not variables—that you literally provide in your script.

"ram"
2;
00
null
undefined

// Arithmetic Operator
let a=45;
const b=4;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a/b=",a/b);// accurate aunxa in js
console.log("a*b=",a*b);
console.log("a**b=",a**b);// It is 45^4
console.log("a%b=",a%b);
// see the difference
// 1.
console.log("++a",++a);// it addbefore 
console.log("a++ =",a++);//itadd after
console.log(a);
// b--;
// hence two times variable cannot be assigned at const datatypes
console.log("--a =",--a);
console.log("a-- =",a--);
console.log("a",a);
console.log("a-- =",a--);

// Assignment Operator

let assignment=0;

 assignment +=5;

console.log(assignment);
// here assignment is updatedinto 5
assignment /=5;
console.log(assignment);

assignment *=10000;
console.log(assignment);

assignment =5/0;
console.log(assignment);

// Comparision Operators
// let comp1=6;
// let comp2="6";
let comp1=6;
let comp2=8;

console.log("comp1 == comp2 is ",comp1==comp2);
console.log("comp1 != comp2 is ",comp1 !=comp2);
console.log("comp1 === comp2 is ",comp1 === comp2);
console.log("comp1 !== comp2 is ",comp1 !== comp2);
console.log("comp1 > comp2 is ",comp1 > comp2);

// Logical Operators
let x=5;
let y=6;

console.log(x<y && x==5);
console.log(x>y || x==5);
console.log(!false);
console.log(!true);

console.log("x!= in number is ",x!=100);

console.log("x=!number is ",x=!100);

console.log(!true);

// This is a single line comment.
/*
This is a samplemultiple line comment
*/



