// // matches,closest and contains method 
// console.log(id1);
// console.log(sp1);
// id1 and sp1 document. garera acces naagarda pni chrome lya tipxa
// but its not a goood practice..



let id1=document.getElementById("id1");
console.log(id1);
let sp1=document.getElementById("sp1");


// 1.Element.matches = To check if element matches the given CSS slector
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));



// 2.elem.closest(CSS)=To look for the nearest ancestor or parent that matches the given CSS
// selector.The elementself is also checked.
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));





// 3.Element.contains(elem):Returns true if elemB is inside elemB(a descendant of elemA) 
// or when elemA == elemB
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));
