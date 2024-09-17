// part-34-ElementOnlyNavigation.js


// ARROW FUNC.
const changeBgRed=()=>{
    document.firstElementChild.style.background="red";
    
    
    // I dont know but nextElementSibling last line ma lekhda effect dekhekoxaina
    // nextSibling will be node so write nextElementSibling
    // document.body.firstElementChild.nextSibling.style.background="green";
    // I think two sibling bhayo bhane top will get execute and one wont....
    document.body.firstElementChild.nextElementSibling.style.background="green";
    document.body.nextSibling.style.background="blue";
    document.body.firstElementChild.style.background="green";
    
}

changeBgRed();


let b=document.body
console.log(b)

console.log("First child of b is",b.firstChild)
// Firstchild can be textnode,comment node,or Elememnt node

// But in Elementchildwe wil get element only like div,span,p tag etc.
console.log("First Element of b is",b.firstElementChild)

// document.lastElementChild; is last Element Child
// document.nextElementSibling; is next Sibling(Element)
// document.previousElementSibling is previous Sibling which is an element 





// NORMAL FUNC.
function add(a,b){
    return a+b;
}
console.log(add(10,20));