// let a=document.getElementsByTagName("section")[0]
let a=document.getElementsByTagName("div")[0]

// a.innerHTML =a.innerHTML+"<h1>Hello world!</h1>";
// a.innerHTML shows html inside of a and + will update value

let div=document.createElement("div");
div.innerHTML="<h1>Hello world!</h1>";
// a.appendChild(div);
// append means upload....
// a.append(div); //span bhitra ko agadi aunxa
// a.prepend(div);
// span bhitra ko paxadi aunxa

// a.before(div)
// a.after(div);

a.replaceWith(div);
// replacewith div writes a a created div message to innerhtml of all div.check it

// replacewith div erase all the div[0] and rewrite its new div