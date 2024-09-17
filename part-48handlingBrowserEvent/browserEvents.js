let x=function(e){
  // FUNCTION BHITRA KO e lekhepni hunxa nlekhe pni hunxa
  // and e is a pointerEvent object to see its return type run  this code in console
 console.log(e);
//  console.log(e.target);
 console.log(e.button)
//  console.log(e.target);
//  console.log(e.type,e.clientX,e.clientY);
  alert("Hello world111!");
}
btn.addEventListener('click',x)

// btn.addEventListener('click',function(e){
//   alert("hello world11111!")
// // btn.style.color=" aqua";
// }
// )

let y=function ram(e){
alert("Hello world 2");
}
btn.addEventListener("click",y);
// btn.addEventListener('click',function(e){
//   alert("hello world2!")
// btn.style.color="red";
// })

let a=prompt("What is your favourite number?")
if(a=="2"){
  btn.removeEventListener('click',x)

  // so removeEventListener works when the function is object.
  // if given in function it will not work [watch skip]

  btn.addEventListener('click',function(e){
      alert("hello world1111!")
    // btn.style.color=" aqua";
    }
    )

// If we do this this function will be different function for JS environment due to which
// upper eventlistener will not be remove     // 

}