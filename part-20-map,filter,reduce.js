// map filter is the higher order array methods ,if you
// use map,filter and reduce then lots of your time will be save.


let arr=[25,32,21];

// 1111.map creates a new array by performing some operation on each array element .
// a.map((value,index,array)=>{
//     return value*value;
// })

//aaaaaaa. ARRAY MAP Method
let a=arr.map((value,index,array)=>{
    console.log(value,index,array);
    // return value+1;
    // oryou can do this too 
    return value+index;
})
console.log(a);
console.log(arr);
//bbbbbbbb. Array Filter Method
let arr2=[45,23,21,0,3,5]
let a2=arr2.filter((a)=>{

return a<10;

})

// Original array doesnot cahnge in filter and mapmethod
console.log(a2);
// console.log(arr2);

// cccccccccc. Array reduce method
let arr3=[4,5,6,7];
// let newarr3=arr3.reduce((h1,h2)=>{
    // suru ko two value addgarxa,second two value store in h1andadded to 3rd variable.h2

    // return h1+h2
// })

// or 
const reduce_func=(h1,h2)=>{
    return h1+h2;
}
let newarr3=arr3.reduce(reduce_func)

console.log(newarr3);





