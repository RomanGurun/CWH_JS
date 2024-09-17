var btn=document.querySelector("#btn");
var txt=document.querySelector(".txt");

btn.addEventListener("click",()=>{
})


setInterval(() => {
    txt.classList.toggle('active');
    
}, 1000);

var generateotp =(dgt)=>{
var num="0123456789";
let otp="";
for(let i=0;i<dgt;i++){
    otp +=num[Math.floor(Math.random()*10)]

}
return otp;
}
document.write("<b> new otp: </b>");
setTimeout(()=>{
generateotp();

},3000);

document.write("<br>"+generateotp(4) +"</br>");


const names =["c","d","e","f"]
const nameLen= names.map(name=>
    name.length);
console.log(nameLen);

