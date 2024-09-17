let name="Harry";
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);


let frined='harrybhai';
console.log(frined)

// Part of MOdern JS

// Template Literals:Template Literals use backtics instead of quotes to define a string.


let boy1="Pramod"
let boy2="Nikhel"

// Nikhel is a friend of Pramod
let sentence =`${boy2} is a friend of ${boy1}`;
console.log(sentence);


// Escape Sequence Characters

// So in Escape Sequence Characters use \ this will keep single quote as single quote .


// let fruit ='Bana  na'
let fruit ='Bana\'na';

console.log(fruit);
console.log(fruit.length);
// Hence a space is also counted in length.IMPORTANT.
// Likewise \n to create a new line 
let fruits ='Bana \nna';

console.log(fruits);
console.log(fruits.length);

// or 
let mangoo="Mang   \"00"
console.log(mangoo);

// \r is a sequence charecetr i.e \r= carriage return.
let grape='Gra\r pe'
console.log(grape);

// \t = Tab 
let apple='app\tle'
console.log(apple);
console.log(apple.length);
