// CHAPTER-3 Practice Set
// 1.WAP to print the marks of a student in an object using for loop 

let marks={
harry:90,
subham:9,
lovish:56,
monika:4
}
//  Array is a collection of an object.
// Object.keys(marks).length:It gives a keys and length of a object 
for(let i=0;i<Object.keys(marks).length;i++){
console.log("The marks of "+Object.keys(marks)[i]+ " are "+marks[Object.keys(marks)[i]]);
}


//2. WAP in Q.1 using for in loop

for(let key in marks){
    console.log(key);
    console.log("The marks of "+key ," are "+marks[key]);

}

// 3.Write a program to print"try again " until the user enters the correct numbers.
let cn=4;
let i;
while(i!=cn){
i=prompt("Enter a number")
console.log("Try Again")

}
console.log("You have entered a correct number.");


// 4.Write a function to find mean of 5 numbers.

const mean=(a,b,c,d)=>{
return(a+b+c+d)/4;


}
console.log(mean(4,5,6,7));