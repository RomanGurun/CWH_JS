let num=[3,4,5];
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

//111111.forEach loop uses in Array
// foreach loop= calls a function,once for each array element.
// const a =[1,2,3];
// a.forEach((value,index,array)=>{
    //function logic
// })


num.forEach((element)=>{
    console.log(element*element);
})

//22222. Array.from = used to create an array from any other object

let name="harry";
let arr=Array.from(name);
console.log(arr);



// 333333.for of= for-of loop can be used to get the values from an array 
// so for of loop is shortcut accesss the array items who will write this 
// lomg code if you have this code.. 

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }



for(let i of num){
    console.log(i);
}





//4444444. for in= for in loop can be used to get the keys from an array 

for(let i in num){
    console.log(i);
    // And to access the keys value write this code...
    // and it also run again and again hence it is loop too 
// console.log(num[i]);
}

// forin loop gives a keys in a object whereas it gives a keys as well in a Array. 
// i.e 0 will store 3,1 key will store 4 and 2 will store 5. 

