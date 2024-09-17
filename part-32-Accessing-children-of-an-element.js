// REFERENCE = CHAPTER -7.pdf

// part-32-Accessing-children-of-an-element.js
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes[2]);

console.log(document.body.childNodes);






// Following is always true:
// elem.childNotes[0] ===elem.firstChild
// elem.childNodes[elem.childNodes.length-1]===elem.lastChilds

// Note:childNodes looks like an array.Buts its not actually an array but a collection.We
// can use Array.from(collection)to convert it into an Array. (((Array methods wont work))))

let arr=Array.from(document.body.childNodes)
console.log(arr)
// To convert nodelist into an array but 
// Even after converting nodelist into an array 
// you cannot use array methods 
