// // Artimetic Operators
let a = 5;
let b = 2;

console.log("a = ",a, "& b = ",b);
console.log("a + b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);

// // Q1. Get user to input a number using prompt("Enter a number : ").Check if the number is a mutiple of 5 or not.

let num;
num = prompt("Enter a number")
    if(num%5===0){
    console.log(num,"is a multiple of 5");
}
else {
    console.log("Not a multiple of 5");
}



