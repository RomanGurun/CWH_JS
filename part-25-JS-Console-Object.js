// REFERENCE ======= Chapter 6.pdf


// assert()=used to assert a statement;
// clear()=clears the console
// log()=outputs a message to the console.
// table=display a tabular data
// warn()=used for warning
// error()=used for errors
// info()=used for special information





// Console objects methods 
//  The console object has a several methods,log being one of them .Someof them are:

// console.log
// console.error
// console.warning
// console.time
// console.timeEnd

obj={a:1,b:2,c:3,d:2}
obj1=[2,3,45,5]
console.table(obj);
console.table(obj1);
console.warn("Hey plese dont drink vodka and soda")
console.info("Hey this is an important info");
console.error("Error loading..... finished error.")

console.log("log");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err"!=false);
console.assert("err"==false);

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