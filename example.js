


const c=((cpu,user)=>{
    
    if(cpu==user){
        return "Nobody wins! Math tied..";
    }
    else if(cpu=="S" && user=="W"){
        return user;
    }
    else if(cpu=="S"&& user=="G"){
        return cpu;
        
    }else  if(cpu=="W"&& user=="G"){
        return cpu;}
        else if(cpu=="W"&&user=="S"){
            return user;
        }
        else if(cpu=="G"&&user=="S"){
            return cpu;
        }
        else if(cpu=="G"&& user=="W"){
            return user;
        }
        
        
    })
// Array.from()
    let val;
    while(val!="Nobody wins! Math ties.."){
    let cpu1=Math.floor(Math.random()*3);
    
    let cpu=["S","W","G"][cpu1];
    
    let user=prompt("Enter S W or G:");

    let result=c(cpu,user);
console.log(`CPU:${cpu} <br> User:${user} <br> The winner is ${result}`)

if(result==cpu){
let i=1;
while(i<=8){    
    console.log(`${cpu} scores ${i} point.`);
i++;
}
 
}}