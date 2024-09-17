// Q.1 What will the following print in in javascript?
console.log("harr\"".length);

// Q.2 Explore the includes,startswith and endswith function of a string.
// sentence.include(word) writes true and false.

// include
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"


// startswith function
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false


// endswith function
const str1s = 'Cats are the best!';

console.log(str1s.endsWith('best!'));
// expected output: true

console.log(str1s.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false



// Q.3 wap to convert a given string to lowercase

let girlfriend="Jacqueline"+" Sunny"+" Reeta"+" Meena"
console.log(girlfriend.toLowerCase());


// Q.4 Extract the amount of this string 
// Please give Rs1000"

let str="Please give Rs1000";
// index[0] start from 0.count from 0.
// let amount=str.slice(12,17);
// or 
// let amount=str.slice("Please give Rs".length)
let amount=Number.parseInt(str.slice("Please give Rs".length))


console.log(amount);
console.log(typeof amount);


// Q.5 Try to change 4th character of a given string when you able to do it ?
let friend="Deepika"
friend[3]="R"
console.log(friend);
// friend is not changed,because it is immutable...
 let res=friend.replace("ee","yt")
console.log(res);