                   //   CHAPTER -5 PRACTICE SET

// Q.1 Create an array of numbers and take input from the user to add numbers to this array.


  let arr1=[1,2,3,4,5,6,7];
  let a1=prompt("Enter a number");
a1=Number.parseInt(a1);
arr.push(a1);
console.log(arr);

// Q.2 Keep adding numbers to the array in 1 until 0 is addedto the array.

let arr2=[1,2,3,4,5,6,8];
let a2; 
do{
a2 =prompt("Enter a number:");
a2=Number.parseInt(a2);
arr2.push(a2);
console.log(arr2);



}

while(a2!=0);
console.log(a2);

// Q.3 filter for numbers divisible by 10 from a given array.

let arr3=[1,2,30,4,50,6,7,83,670];
let n=arr3.filter((x)=>{
    return x%10 ==0;
})
console.log(n);


// Q.4 Create an array of square of given numbers

let arr4=[2,3,4,5,6,7,8];
let square =arr4.map((x)=>{
    return x*x;
})

console.log(square);




// Q.5 Use reduce to calculate factorial of a given number from an array of first n natural
//  numbers (n being the number whose factorial needs to be calculated.)

let arr5=[1,2,3,4,5,6,7,8];
let r=arr5.reduce((x1,x2)=>{

return x1*x2;


})
console.log(r);
