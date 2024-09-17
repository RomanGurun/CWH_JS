alert("hello");
//  setTimeout(function(){
//     alert("I am inside of settimeout")
// },5000);
// kunai pni kam lai ekxin paxi execute garna use this setTimeout function.



const sum=(a,b,c,d,e)=>{
console.log("yes I am running"+(a+b+c+d+e))
a+b;
}


let d=setTimeout(sum,1000,4,4,3,4,3); //sum=func,1000=in ms,other=args(argument)
console.log(d); //d returns timerID



let timerId=setTimeout(c=()=>{
    alert("Never ")
},1000);
console.log(timerId);

clearTimeout(timerId);
// let a=setTimeout(function(){
//     alert("I am inside of settimeout")
// },5000);

// // example of cleartimeout


// let b=prompt("Do you want to print a alert? ");

// if("n"==b){
    
//     clearTimeout(a) //clearTimeout(a) will stop the execution of setTimeout

// }

// console.log(a);
// // a will print 1 and 1 is a timerID of a setTimeout. 



