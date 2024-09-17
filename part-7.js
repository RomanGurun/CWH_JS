let a= prompt("Hey Enter your age.")
console.log(typeof a);
// a=Number.parseInt(a); //converting thestring into a number.
// console.log(typeof a);

i f(a<0){
    alert("This is invalid age.");
}
else if(a<9){
    alert("You are a kid and you cannot even think of driving.");
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving after 18")
}
else{
    alert("You an now drive as you are above 18.")
}


