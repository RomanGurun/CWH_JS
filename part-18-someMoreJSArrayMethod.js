// delete is not a method but a operator.
// hence in delete array length is not affected even after we delete an element in array. 
// BUt it really delte the items.....

// let num=[1,2,6,9,7,5,4,3]
// let num_more=[11,12,13,14,15]
// let num_even_more=[211,212,213,214,215,216,217]

// console.log(num.length);
// delete num[0];
// console.log(num);
// console.log(num.length);

// let newArray=num.concat(num_more,num_even_more)
// console.log(newArray);
// console.log(num);
// console.log(num_more);
// concat method doesnot modify the orginal array.

// sort method:it is used to sort an array alphabetically.
let compare=(a,b)=>{
    return a-b; //a-b is ascending order.
    return b-a;//it shows in descending order.
} //self created function
let num=[511,22,3,14,5,6,7,8,229];
num.sort(); //dont get confuse it sort data in an alphabetically order. 
num.sort(compare); //it shows in ascending order and see note too.
console.log(num);
// sort modifies the originalarray whereas concat method doesnot.


// reverse() method just reverse the data simple..
num.reverse();
console.log(num);

// splice and slice 

// splice=splice can be used to add new items to an array 
// Also returns deleted items modified the array.

let numb=[512,4,6,78,90,65,88];
let deletedValues=numb.splice(2,3,101,102,103,105,106,109,110);
// 2,3 is 2 bata,3 is no.of elements deleted...
// numb.splice(2,101,102,103,105,106,109,110);
// check me
console.log(numb);
console.log(`The deleted stings are ${deletedValues}`);
console.log(typeof deletedValues);
// slice=slices out a piece from an array.It creates a new array.



// slice methods:slice out a piece froma an array.It creates a new array.
// Means it doesnot modify the array.so to see the result of slicing
// we have to print the slice variable.. 
let numofslice=[3,2,3,21,12,44,66,77,88];

numofslice.slice(3,5); 
console.log(  numofslice.slice(3,6) )

// let newNum=numofslice.slice(3,5);
// console.log(newNum);
