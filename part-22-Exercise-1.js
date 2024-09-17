let x=Math.random()*10;
let gen=Math.round(x);
// console.log(x);
// console.log(gen);
let guess;
console.log("Guess a  generated number.")
let p;
let n=3;
while(p!=gen){
 p=prompt("Guess your number:");


 if(guess!=0){
    guess=n--;
    console.log("Your chance is",guess);
    }
    if(guess==0){
     
     console.log("The actual number is",gen);
     
    }
    
}
console.log("The actual number is",gen);
