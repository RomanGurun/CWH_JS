//Q.1 WAP using prompt function to take input of age as a value from the user and use
// alert to tell him if he can drive!
// let p=prompt("Enter your age!");
// p=Number.parseInt(p);
// if(p>0){
//     alert("You can drive!");
// }else if(p<0){
//     alert("Sorry!,you cannot drive.")
// }






// Q.2 In Q.1 use confirm to ask the user if he wants to see the prompt again 
// let p=prompt("Enter your age!");
// if(p>0){
//     alert("You can drive!");
// }else if(p<0){
//     alert("Sorry!,you cannot drive.")
// }
// let c=confirm("Do you want to see prompt again?");
// if(c){
//     let p=prompt("Enter your age!");
//     if(p>0){
//         alert("You can drive!");
//     }else if(p<0){
//         alert("Sorry!,you cannot drive.")
//     }
    
// }
// else{
//     document.write("We wont display it...")
// }

// Q.3 In the previous questions,use console.error to log the error if the age entered is
// negative

// let p=prompt("Enter your age!");
// if(p>0){
// window.alert("You can drive!");


// }else if(p<0){
// console.error("You cannot drive!");

// }

// Q.4 WAP to cahnge the url to google.com(Redirection )of user enters a number 
// greater than 4

let p=prompt("Enter your age!","Anything");
p=Number.parseInt(p);
if(p>4){
    alert("Your age is","p");
}
else if(p<4){

    let stateObj = { id: "100" };

    window.history.replaceState(stateObj,
        "RomanGrg", "http:google.com");



}




// Q.5 Change the background of the page to Yellow,red or any other color based on user input 
// through prompt.
// let val=prompt("Enter a background colour");
// let c;
// if(val=="red"){
//     document.body.style.background="red";
// }
// else if(val==val){
//     document.body.style.background=val;
// }
