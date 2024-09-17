
// let val=document.getElementById("btn");
// val.addEventListener((click,myfunction)=>{

// function myfunction(){

//     let prom=prompt("Do you like to see a Joke:Yes or NO.")
// if(prom=="Yes" || prom=="yes")
// {
// let joke=[
//    ` 1. What do you call a boomerang that won’t come back?
//     A stick.
//     `,
//     `2. What does a cloud wear under his raincoat?
//     Thunderwear.
//     `,
    
//    ` 3. Two pickles fell out of a jar onto the floor. What did one say to the other?
//     Dill with it.
//     `,`
//     4. What time is it when the clock strikes 13?
//     Time to get a new clock.
//     `,`
//     5. How does a cucumber become a pickle?
//     It goes through a jarring experience.
//     `,`
//     6. What did one toilet say to the other?
//     You look a bit flushed.
//     `,`
//     7. What do you think of that new diner on the moon?
//     Food was good, but there really wasn’t much atmosphere.
//     `,`
//     8. Why did the dinosaur cross the road?
//     Because the chicken wasn’t born yet.
//     `,`
//     9. Why can’t Elsa from Frozen have a balloon?
//     Because she will "let it go, let it go."
//     `,`
//     10. What musical instrument is found in the bathroom?
//     A tuba toothpaste.
//     `,`
//     11. Why did the kid bring a ladder to school?
//     Because she wanted to go to high school.
//     `,`
//     12. What do you call a dog magician?
//     A labracadabrador.
//     `,`
//     13. Where would you find an elephant?
//     The same place you lost her.
//     `,
//     `14. How do you get a squirrel to like you?
//     Act like a nut.
//     `
// ]
// let mat=Math.floor(Math.random()*10);
// console.log(joke[mat]);
// document.body.innerHTML=joke[mat];

// }
// else{
//     document.body.innerHTML="OK";
// }
// }
// })

let val=document.getElementById("btn");

    let prom=prompt("Do you like to see a Joke:Yes or NO.")
if(prom=="Yes" || prom=="yes")
{
let joke=[
   ` 1. What do you call a boomerang that won’t come back?
    A stick.
    `,
    `2. What does a cloud wear under his raincoat?
    Thunderwear.
    `,
    
   ` 3. Two pickles fell out of a jar onto the floor. What did one say to the other?
    Dill with it.
    `,`
    4. What time is it when the clock strikes 13?
    Time to get a new clock.
    `,`
    5. How does a cucumber become a pickle?
    It goes through a jarring experience.
    `,`
    6. What did one toilet say to the other?
    You look a bit flushed.
    `,`
    7. What do you think of that new diner on the moon?
    Food was good, but there really wasn’t much atmosphere.
    `,`
    8. Why did the dinosaur cross the road?
    Because the chicken wasn’t born yet.
    `,`
    9. Why can’t Elsa from Frozen have a balloon?
    Because she will "let it go, let it go."
    `,`
    10. What musical instrument is found in the bathroom?
    A tuba toothpaste.
    `,`
    11. Why did the kid bring a ladder to school?
    Because she wanted to go to high school.
    `,`
    12. What do you call a dog magician?
    A labracadabrador.
    `,`
    13. Where would you find an elephant?
    The same place you lost her.
    `,
    `14. How do you get a squirrel to like you?
    Act like a nut.
    `
]
let mat=Math.floor(Math.random()*10);
console.log(joke[mat]);
val.innerHTML=joke[mat];

}
else{
    document.body.innerHTML="OK";
}
