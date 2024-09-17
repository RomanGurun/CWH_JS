// Array Methods
let num=[1,2,3,4,5];
// 1.toString()=Converts an array to a string of comma seperated values 
console.log(num.toString());

// see the difference 

console.log(num);
//2. join= joinns all the array elements using a seperator 

// let c=num.join("_")
let c=num.join("and ")
console.log(c);
console.log(typeof c);


//3. Pop() = removes last Element from the array 
// pop also update the original array,return the popped value

let r=num.pop();// pop returns the popped element i.e shows last removed element 
console.log(num,r);

// SOme methods modified original array and some method 
// written new array 


// 4.push() = Adds a new element at the end of the Array.
// and ALSO return the new Array length. 
let t=num.push(56,9);
console.log(num,t);

// push modifies the original array and return the new array length.




// 5.shift() =Removes first element and returns it 

let w=num.shift();
console.log(num);
console.log(w);


// 6.unshift() =Adds element to the beginning returns new array length

let f=num.unshift(7888);
console.log(num,f);


// 7.delete =Array elemenst can be deleted using the delete operator


// 8.concat()=used to join arrays to the given array
