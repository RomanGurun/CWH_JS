// OLD FASHIONED BUT USEFUL IN ADMIN PANEL

alert("Enter the value of a!");
let a=prompt("Enter a value :","34");
document.write(a);
a=Number.parseInt(a);
// alert(`You entered a value type ${typeof a} .......`)

alert(`You entered a of type`+" "+(typeof a));

let write=confirm("Do you want to write it to the page");
if(write){
    // write return true and false 
// if(true){

// if click on ok done write=true
    document.write(a);
}else
{
    document.write("Please allow me to write.");
}