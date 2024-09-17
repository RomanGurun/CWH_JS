// object like Entity eg.Marks_Class_12 consist several values
// Array start from 0 but length start from 1.
let marks_class_12=[100,20,30,90,null,false,"Not present"];
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]);
// will be undefined because the index 6 doesnot exist.
marks_class_12[7]=89;
// Adding a new value to the array
marks_class_12[0]=96;
// Changing the value of an array.


console.log(marks_class_12);
console.log("The length of marks_class_12 is",marks_class_12.length)
// length starts from 1 hai.

// IMPORTANT NOTE:
// "Arrays" are mutable and can be changed whereas string is not.
// IN JS ARRAYS ARE OBJECTS,its typeof operator on array returns object.
console.log(typeof marks_class_12); 

// Arrays one variable can have several values.

let i;
for(i=0;i<marks_class_12.length;i++){
    console.log(marks_class_12[i]);
}