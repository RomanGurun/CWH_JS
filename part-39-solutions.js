// Exercise-2 snake water Gun 
// Use JavaScript to create a game of sanke water and gun.The game should ask you to enter 
// S W or G. The  computer should be able to randomly generate S,W or G and declare
//  Win or Less using alert.ApplyUse confirm and prompt  wherever required

let a=prompt("Enter a value:");
a.Number.parseInt();
if(a===10){
    return a;
}

let user=prompt("Enter S,W or G");

let cpuI=Math.floor(Math.random()*3);
// Math.floor to generate number in non-decimal numbers.

let cpu=["S","W","G"][cpuI]


const match=(cpu,user)=>{
if(cpu===user){
    return "Nody. Match is tied.";
}
else if(cpu ==="S" && user==="W"){
    return "cpu"
}
else if(cpu ==="S" && user==="G"){
    return "user"
}

else if(cpu ==="G" && user==="W"){
    return "user"
}
else if(cpu ==="G" && user==="S"){
    return "cpu"
}
else if(cpu ==="W" && user==="S"){
    return "user"
}

else if(cpu ==="W" && user==="G"){
    return "cpu"
}
}

let result=match(cpu,user);
console.log("The winner is "+result);
// document.write(`CPU:${cpu} <br> User:${user} <br> The winner is :${result}` );

document.write(`CPU:${cpu} <br> User:${user} <br> The winner is :${result.toUpperCase()}` );


// let user = prompt("Enter S, W or G")
// let cpuI = Math.floor(Math.random() * 3);
// let cpu = ["S", "W", "G"][cpuI]

// const match = (cpu, user)=>{
//   if(cpu === user){
//     return "Nobody"
//   }
//   else if(cpu === "S" && user==="W"){
//     return "cpu"
//   }
//   else if(cpu === "S" && user==="G"){
//     return "user"
//   }
//   else if(cpu === "G" && user==="W"){
//     return "user"
//   }
//   else if(cpu === "G" && user==="S"){
//     return "cpu"
//   }
//   else if(cpu === "W" && user==="S"){
//     return "user"
//   }
//   else if(cpu === "W" && user==="G"){
//     return "cpu"
//   }
// }
// let result = match(cpu, user)
// document.write(`CPU:${cpu} <br> User:${user} <br>The winner is: ${result.toUpperCase()}` )
