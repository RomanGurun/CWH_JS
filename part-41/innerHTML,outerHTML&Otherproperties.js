let x=document.getElementsByTagName("span")[0]
console.log(x);

let y=document.getElementsByTagName("span")[0]
console.dir(y);  //to show tag as a object

console.log(document.body.firstChild.nodeName); //to show nodename of -----you choose;
console.log(document.body.firstElementChild.nodeName);
// document.body.firstElementChild shows child element with Code wheres .nodeName shows 
// its name. 



first.innerHTML="<i> I am Roman Gurung</i>"
// {{If you update innerHTML this class or id wont be removed ....}}}

// inner html shows inner html of the idor classes but outertml shows all innerhtml +
// outerHtml and itself html too 
// so first id is a aelement and .innerHTML function is valid under a element nodes only...

// first.outerHTML; shows firsid html from top to z.
// to see it do 
console.log(first.outerHTML);




//{{If you update outerHTML then present text will be erased.}}}
first.outerHTML="<div>MAN MAN MAN MANN MAN MAN MAN </div>"
// OuterHTML property contains the full HTML innerHTML + the element itself..




// To get the content of child tags or node you can do this too.
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);

console.log(document.body.textContent); //shows all text content...




first.hidden=false; //{{{{{{It reshow the hidden tags again....}}}}}


// const c=document.body;
// c.addEventListener((click,run)=>{

// return run=console.log("HOOOOOO");

// })
// (click,run)