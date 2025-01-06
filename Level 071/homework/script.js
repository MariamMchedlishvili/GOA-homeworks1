// Math.PI - returns math pi constant

console.log(Math.PI()); 


// Math.E - returns Euler's number constant

console.log(Math.E); 


// Math.floor - rounds down float number to integer

console.log(Math.floor(4.9)); 
console.log(Math.floor(4.3)); 
console.log(Math.floor(-4.3)); 
console.log(Math.floor(10.99)); 
console.log(Math.floor(-10.99));

// Math.trunc - removes float part from number

console.log(Math.trunc(4.9));
console.log(Math.trunc(-4.9));
console.log(Math.trunc(10.567)); 
console.log(Math.trunc(-10.567)); 
console.log(Math.trunc(0.99)); 

// Math.round - rounds float number to closest integer

console.log(Math.round(4.5)); 
console.log(Math.round(4.4)); 
console.log(Math.round(-4.4)); 
console.log(Math.round(-4.6));
console.log(Math.round(0.5)); 

// Math.ceil - rounds up float number

console.log(Math.ceil(4.3)); 
console.log(Math.ceil(4.7)); 
console.log(Math.ceil(-4.7)); 
console.log(Math.ceil(0.1)); 
console.log(Math.ceil(-0.1)); 

// Math.pow - powers a number

console.log(Math.pow(2, 3)); 
console.log(Math.pow(5, 2)); 
console.log(Math.pow(3, 4)); 
console.log(Math.pow(10, 0)); 
console.log(Math.pow(7, 1)); 

// Math.random - generates random number between 0 and 1

console.log(Math.random()); 
console.log(Math.random() * 100); 
console.log(Math.random() * 50);
console.log(Math.random() * 10); 
console.log(Math.random() * 1000); 

// Math.abs - returns absolute positive number

console.log(Math.abs(-10)); 
console.log(Math.abs(5)); 
console.log(Math.abs(-0.5)); 
console.log(Math.abs(-100));
console.log(Math.abs(0)); 

// Math.sqrt - returns square root of a number

console.log(Math.sqrt(16)); 
console.log(Math.sqrt(25)); 
console.log(Math.sqrt(49));
console.log(Math.sqrt(100)); 
console.log(Math.sqrt(0)); 

// Math.max - returns highest value number

console.log(Math.max(1, 2, 3, 4)); 
console.log(Math.max(-1, -2, -3, 0)); 
console.log(Math.max(10, 100, 50)); 
console.log(Math.max(5, 5, 5));
console.log(Math.max(1, 3, -1, 0)); 

// Math.min - returns lowest value number

console.log(Math.min(1, 2, 3, 4)); 
console.log(Math.min(-1, -2, -3, 0));
console.log(Math.min(10, 100, 50)); 
console.log(Math.min(5, 5, 5));
console.log(Math.min(1, 3, -1, 0)); 




function getRandomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

console.log(getRandomInt());



function calculateAreaOfCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  console.log(calculateAreaOfCircle(5));