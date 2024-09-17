// 1WAP to show different alerts when different buttons are clciked


// 2 WAP to create a website whi9ch is capable of storing bookmarks of your favourite 
// websites using href

// 3 Repeat Q2 using event listeners 
// let a=document.getElementsByClassName("fb")[0];

// a.addEventListener('click',function(e){
// window.location="https://www.facebook.com";
// window.focus();
// })


// let b=document.getElementsByClassName("fb")[1];
// b.addEventListener('click',function(e){
// window.location="https://www.google.com";
// window.focus();
// })


// let c=document.getElementsByClassName("fb")[2];
// c.addEventListener('click',function(e){

// let url="https://www.twitter.com"
// window.open(url);
// or

//     window.location="https://www.twitter.com";
// window.focus();
// })





//4. WAp to keep fetching contents of a websites(Every 5 seconds)



// const fetchContent=async(url)=>{
//     con=await fetch(url);
//     let a =await con.json();
//     return a;

// }


// setInterval(async function(){
// let url="https://jsonplaceholder.typicode.com/todos/1"
// console.log(await fetchContent(url))

// },3000)





// 5.Create a glowing bulb effect using classList 

setInterval(async function(){

    document.querySelector("#bulb").classList.toggle("bulb")
    
},300)
