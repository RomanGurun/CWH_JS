const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

let ctitle=document.getElementsByClassName("card-title")[0];
// array[0] garnai parxa i dont know how....
// Answer because it is class.to let jsenvironment

ctitle.style.color="red"

// Id have higher Precedence..
let c1=document.getElementById("firstcardster");
c1.style.color="blue";

let c2=document.querySelectorAll(".card-title");
c2[0].style.color="yellow";
c2[1].style.color="red";
c2[2].style.color="green";


console.log(c2);

let thiss=document.querySelector(".this").style.color="black";
thiss=document.querySelector(".this").style.background="red";

//  thiss=document.querySelector(".this").firstElementChild.style.color="black";
// i dont know chalxa k i nai.

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));

console.log(document.querySelector(".card").getElementsByTagName("a"));
// yo chai milxa rayxa i.e card bhitra tag xa ki nai...

console.log(document.getElementsByName("search"));
// Yesto RAYXA name ma logical and authentic value dinu parxa rayxa.....

// Element and Elements ma farak hunxa and 
// QuerySelector and QuerySelectorAll ma pni 
// ie S and All written more element and be careful while writing Syntax.
// // Because it might give you a JS error