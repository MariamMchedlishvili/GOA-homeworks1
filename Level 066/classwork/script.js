// first
const age = 18;
let yourAge = Number(prompt("Enter your age:"));

if (yourAge < age) {
    console.log("You are not adult.");

} else  {
    console.log("You are an adult");
}



// second
let numbers = [];
for (let i = 1; i <= 30; i + 1) {
    numbers.push(i);
}

let evenNumbers = [];
for (let i = 0; i < numbers.length; i + 1 ) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
console.log(evenNumbers);