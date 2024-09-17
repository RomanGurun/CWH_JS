// we can direcly acces by Id name but its not a good practice
// so do this...

let first=document.getElementById("first");

// 1
let a=first.getAttribute("class");
console.log(a);

// 2.
console.log(first.hasAttribute("class"));
// class ko name nai lekhne parxa to check.Hence a means whole obj will be wrong Syntax 


console.log(first.hasAttribute("style"));

// 3
// first.setAttribute("hidden","true"); //to hide html
first.setAttribute("class","true sachin");

// 4.
first.removeAttribute("class");


// 5 data- to add a custom attributes in HTML by JS.

// And idortagorname.dataset.cutom aattributes name to access the data ..
console.log(first.attributes);

console.log(first.dataset);

console.log(first.dataset.game);

console.log(first.dataset.player);


console.log(first.dataset.ihaveaddedhere);

console.log(first.dataset.roman);
// Even if dataset name is in Capital.Only by small letter bata chai hamilya attrib. data
// access garna sakxau..