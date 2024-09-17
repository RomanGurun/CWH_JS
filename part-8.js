// chapter two practice set
// ProblemNo.1

// let age ="Enter your age";
// console.log(age);

// age=60;
// if(age>10 && age<20){
// console.log("Your age lies betweeen age 10 to 20")

// }
// else{
    
// console.log("Your age doesnot lies betweeen age 10 to 20")

// }
// problem no.2

let age =prompt("What is your age?");
age=Number.parseInt(age); //safe if you convert string into a integer
switch(age){
case 12:
    console.log("Your age is 12");
    break;
    case 13:
        console.log("Your age is 12");
        break;
    
        case 14:
            console.log("Your age is 12");
            break;
        
            case 15:
                console.log("Your age is 12");
                break;
            
default:
    console.log("Your age is not special.");

}

// Question no.3
// let num=prompt("Enter a number");

num=Number.parseInt(num);
if(num%2==0 && num%3==0){
    console.log("Your number is divisble by  2 and 3")
}
else{
    
    console.log("Your number is not divisble by  2 and 3")

}

// Question no.4
// let num=prompt("Enter a number");

num=Number.parseInt(num);
if(num%2==0 ||num%3==0){
    console.log("Your number is divisble by  2 and 3")
}
else{
    
    console.log("Your number is not divisble by  2 and 3")

}
// Question no.5
// MIne CODE
// let age=prompt("Input your age");
// console.log("you can",age<18? "not drive a car":"can drive a car");

// age=Number.parseInt(age);

// HARRY Code 
// let age=19;
// let a =age >18 ? "You can drive":"You cannot drive";
// console.log(a);

let age=prompt("Input your age");
 alert(a=age<18? "You cannot drive a car":" You can drive a car");

// age=Number.parseInt(a);