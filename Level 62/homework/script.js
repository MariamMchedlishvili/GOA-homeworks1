function multiply() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    return num1 * num2;
}


function subtract() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    return num1 - num2;
    
}

function rectangleArea() {
    const length = parseFloat(prompt("Enter the length of the rectangle:"));
    const width = parseFloat(prompt("Enter the width of the rectangle:"));
    return length * width;
}


function minutesToSeconds() {
    const minutes = parseFloat(prompt("Enter the number of minutes:"));
    return minutes * 60;
}

function concatenateStrings() {
    const str1 = prompt("Enter the first string:");
    const str2 = prompt("Enter the second string:");
    return str1 + str2;
}

function nextNumber() {
    const num = parseFloat(prompt("Enter a number:"));
    return num + 1;
}