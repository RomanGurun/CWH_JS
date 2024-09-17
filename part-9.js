// If 0 start then value will be 0 to n-1. n=Total
// for(let i=0;i<500;i++){
//     console.log(i);
// }

// let sum =0;
// let n= prompt("Enter the value of n");
// n=Number.parseInt(n);
// for(let i=0;i<n;i++){
//     sum+=(i+1);
// console.log((i+1),"+");
// }
// console.log("SUm of first",+ n +"natural number is "+sum);

// n factorial program
let mult=0;
let n= prompt("Enter the value of n");
n=Number.parseInt(n);
for(let i=0;i<n;i++){
    sum+=(i+1);
console.log((i+1),"+",sum);
}



// Modern for loop if you need a key and key value only...
let obj= {
    harry:90,
    sam:33,
    geeta:80,
    shiv:90,
    sarita:70
// not =
}

// for in loop
// a var is a keys in obj object 
// for(let a in obj){
// // console.log(a)
// console.log("Marks of"+a + "are"+obj[a]);
// // I can access value of obj like this as well
// console.log("Marks of"+obj.harry + "are"+obj["harry"]);

// }


let objs={
    sam:90,
harry:100,mina:200,hare:1000000
}
for(let a in obj){
    console.log("Marks of "+a +"are"+obj[a]);
}
// for of loop
for(let b of "harry"){
console.log(b)

}

