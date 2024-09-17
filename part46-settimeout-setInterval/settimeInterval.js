const sum=(a,b)=>{

console.log("I am adding"+a+b);
a+b;

}

setInterval(sum,1000,2,10);
console.log(setInterval(sum,1000,2,10));

// setInterval(function(){

// alert("Set Interval")

// },3000)


// It runs after 3 second 


// clearInterval(a)
// clearInterval() is used to stop the exceution of  setInterval() function