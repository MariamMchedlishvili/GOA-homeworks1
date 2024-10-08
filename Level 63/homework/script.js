function greet(name) {
    console.log("Hello player" + name)
}

greet("Mariami")



function add_numbers(num1, num2 = 0) {
    return num1 + num2;
}

function calculate_area(length, width = 1) {
    return length * width;
}


function convert_temperature(temperature, scale = "C") {
    if (scale === "C") {
        return (temperature * 9/5) + 32;  
    } else if (scale === "F") {
        return (temperature - 32) * 5/9;  
    } else {
        return "Invalid scale!";
    }
}



function power(base, exponent = 2) {
    return base ** exponent;  
}


function create_message(name, greeting) {
    if (!greeting) {
        greeting = "Hello";  
    }
    return greeting + ", " + name;  
}

function apply_discount(price, discount = 10) {
    let discount_amount = (price * discount) / 100;
    let final_price = price - discount_amount;
    return final_price;
}


function calculate_price(price, tax) {
    if (!tax) {
        tax = 5;
    }
    let tax_amount = (price * tax) / 100;
    let final_price = price + tax_amount;
    return final_price;
}



function find_max(num1, num2, num3) {
    let max; 

    if (num1 >= num2 && num1 >= num3) {
        max = num1; 
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2; 
    } else {
        max = num3;
    }

    return max; 
}


function pass_or_fail(score) {
    if (score >= 50) {
        return "Pass"; 
    } else {
        return "Fail"; 
    }
}


function sum_of_numbers(numbers) {
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    return sum; 
}

function count_evens(numbers) {
    let count = 0; 

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++; 
        }
    }

    return count; 
}

