//1
let arr = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log("Length of the array:", arr.length);


let arrayToString = arr.toString();
console.log("Array as a string:", arrayToString);


let secondElement = arr.at(1); 
console.log("Second element:", secondElement);

let joinedArray = arr.join('-');
console.log("Joined array with '-':", joinedArray);


arr.push('fig', 'grape');
console.log("Array after push:", arr);


arr.pop();
console.log("Array after pop:", arr);


//2

let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.shift();
console.log("Array after shift:", fruits);


fruits.unshift('grapefruit');
console.log("Array after unshift:", fruits);


delete fruits[1];
console.log("Array after deleting second element:", fruits);


let veggies = ['carrot', 'broccoli'];
let mergedArray = fruits.concat(veggies);
console.log("Merged array using concat:", mergedArray);

let newLength = fruits.unshift('kiwi');
console.log("Array after unshift with new element:", fruits);
console.log("New length of the array:", newLength);


//3 
let myArray = ['apple', 'banana', 'cherry', 'apple', 'banana', 'cherry'];
let findIndex = myArray.indexOf('banana');
console.log(firstIndex);

let lastIndex = myArray.lastIndexOf('banana');
console.log(lastIndex);

let includesCherry = myArray.includes('cherry');
console.log(includesCherry);

let invalidIndex = myArray.indexOf('grape');
console.log(ivalidIndex);

let caseSensitiveCheck = myArray.includes('Apple'); 
console.log(caseSensitiveCheck); 

let caseSensitiveCheckLower = myArray.includes('apple'); 
console.log(caseSensitiveCheckLower); 


//4
let stringArray = ['banana', 'apple', 'cherry', 'date'];
stringArray.sort();
console.log( stringArray);


let numberArray = [23, 5, 16, 42, 1];
numberArray.sort((a, b) => a - b); 
console.log( numberArray);

numberArray.sort((a, b) => b - a); 
console.log(numberArray) ;

stringArray.reverse();
console.log(stringArray);


let mixedArray = ['grape', 'orange', 'lemon', 'lime'];
mixedArray.sort();
console.log(mixedArray);
mixedArray.reverse();
console.log( mixedArray);


//5

let numArray = [12, 5, 8, 20, 1];
numArray.sort((a, b) => a - b); 
console.log( numArray);
numArray.push(15); 
console.log( numArray);


let array1 = [3, 9, 2];
let array2 = [8, 7, 1];
let mergedArray2 = array1.concat(array2); 
mergedArray2.sort((a, b) => a - b); 
console.log( mergedArray2);

let fruitArray = ['apple', 'banana'];
fruitArray.push('cherry', 'date', 'elderberry'); 
console.log( fruitArray);
fruitArray.reverse(); 
console.log( fruitArray);

let index = fruitArray.indexOf('banana'); 
if (index !== -1) {
    fruitArray.splice(index, 1); 
}
console.log( fruitArray);


let fruitString = fruitArray.join(','); 
console.log( fruitString);
let splitArray = fruitString.split(',');
console.log( splitArray);
let isIncluded = splitArray.includes('cherry'); 
console.log( isIncluded);

