// Number guessing game
let gameNum = 25;

let userNum = prompt("Guess the game number : ");
console.log(userNum);

while(userNum!=gameNum){
    userNum = prompt("You entered wrong number. Guess again : ");
}
console.log("Congratulations, you entered the right number");

let str = "Aditya";
console.log(str[1]);

// Template Literals
let specialString = `This is a template literals`
console.log(typeof specialString);

let obj = {
    item : "pen",
    price: 10,
};

// Template Literals
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("The cost of ",obj.item,"is",obj.price,"rupees");

let fullName = prompt("enter your full name without spaces");
let username = "@" + fullName + fullName.length;
console.log(username);