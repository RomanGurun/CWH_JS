// Chapter -7 Practice set 

// 1.Create a navbar and change the color of its first element to red. 
document.getElementsByTagName("nav")[0].firstElementChild.style.color="red";
// Elements so [0] have to be written...
// let fr=document.body.firstElementChild.firstElementChild;
// console.log(fr);
// fr.style.color="red";

let fr1=document.getElementsByTagName("li")[0];
fr1.style.background="green";


// // 2.Create a table without tbody.Now use "View page source" button to check whether it has a 
// tbody or not 



// View page source shows jasta ka testai raw html code 
// whereas inspect autocorect and update the code if little bit code is wrong 




// 3.Create an element with 3 children.Now change the color of first and last element to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color="green";

document.getElementsByTagName("nav")[0].lastElementChild.style.color="green";






// 4. Write a JS code to change background of all <li> tags to cyan.

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
// Tag name without array run hunna to access all li[0] to li[n.length]
// we have to use Array.from method in this code..
    element.style.background="red";
})



// Hence . helps to add property in this function..






// 5.WHich of the following is used to look for the farthest ancestor that matches a given 
// CSS Selector 

// a)matches b)closest c)contains d)none of these 

// d) none of these because closest tells nearest ancestors but not farthest. 


let cccc=document.getElementsByTagName("li")[1].closest("nav");
cccc.style.background="cyan";
// See why Selecting the DOM is important...
console.log(document.getElementsByTagName("li")[1].closest("nav"))
