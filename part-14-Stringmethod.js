// Original string cannot be changed.YEs,concat,slice function etc
// shows like it changes but not string is immutable....
// Hence new string will be create....
let name="Harry\""
console.log(name.length);
name="HArry";
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2,4)); //2 will be selected but not 4.
// 3 to 4 charcter will be selected..

// and if only one args then see result.....
console.log(name.slice(2));


console.log(name.replace("HAr","Sam"));

let friend="Naman"
console.log(name.concat("is a friend of ",friend,"Ok"));

let friend2="     Meena    ";
console.log(friend2);
console.log(friend2.trim());

// canbeconcated directly...
let fr="Raman"+"Samer"+"Harry"
// console.log(fr[0]);

// console.log(fr[1]);

// console.log(fr[2]);

// console.log(fr[3]);

// console.log(fr[4]);

// fr[4]='o' This is not possible
// String is immutable...
console.log(fr);

for(i=0;i<=fr.length;i++){
console.log(fr[i]);

}