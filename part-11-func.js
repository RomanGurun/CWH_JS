// FUnctions in javascript
let a=1;
let b=2;
let c=3;
console.log("Avreage of a and b is",1+(a+b)/2);
console.log("done");
console.log("Avreage of b and c is",1+(b+c)/2);
console.log("done");
console.log("Avreage of a and c is",1+(c+a)/2);
console.log("done");
// SAME CODE IN FUNC.
function oneplusAvg(x,y){
    console.log("done");
    // return 1+(x+y)/2
// or another logic
return Math.round(1+(x+y)/2);
}
console.log("Avreage of a and b is",oneplusAvg(a,b));
console.log("Avreage of b and c is",oneplusAvg(b,c));
console.log("Avreage of a and c is",oneplusAvg(a,c));


const sum=(p,q)=>{
    return p+q;
}
console.log(sum(8,2));


// function without params
// const hello=()=>{
//     console.log("Hey how arae you. I am fine and you..")
// }
const hello=()=>{
    console.log("Hey how arae you. I am fine and you..")
return "hi"
}

hello();
// doesnot show reurn value but it return when
// you do this..
let v=hello();
console.log("I am printing the return valye:",v);

const summation=(a,b)=>{
    let c=a+b;
    return c;
}
console.log(summation(1,3));
// or 
let y=sum(1,3);
console.log(y);


const mud=(x,y)=>{ let c=x*y; return c;}
 console.log(mud(20,3));
