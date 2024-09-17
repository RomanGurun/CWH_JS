
// IMportant answer to know the time taken by the loop

console.time("forloop");
for(let i=1;i<5;i++){
console.log(233);



}

console.timeEnd("forloop");

console.time("While");
let i=1;
while(i!=5){
    console.log(245);
    i++
}
console.timeEnd("While");