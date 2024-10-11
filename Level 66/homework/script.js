function checkNumber (number) {
    if (number %2 === 0){
      return "number is even";
    } else {
        return "number is odd";
    }
   
}


function sumOfList (arr) {
    if (arr.length === 0) {
        return "the list is empty";

    }   
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  
    }

    return sum;
}



function filterNumbers (numbers) {
    let result = [];
    for (let i=0; i <numbers.leght; i++) {
        let multiplied = numbers[i] * 3;

        if (multiplied > 20) { 
            result.push(multiplied);
        }
    }
}
     return result;



function largestInList(arr) {
    if (arr.length === 0) {
        return "The list is empty";
 }
    
     let largest = arr[0]; 
    
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > largest) { 
          largest = arr[i]; 
        }
    }
    
        return largest; 
}


function checkProductGreaterThan100(num1, num2) {
    let product = num1 * num2; 
    if (product > 100) { 
        return true;
    } else {
        return false;
    }
}

function checkFirstLastSame(text) {
    let firstLetter = text[0]; 
    let lastLetter = text[text.length - 1];

    if (firstLetter === lastLetter) { 
        return true;
    } else {
        return false;
    }
}





function letterFrequency(text) {
    let freq = {}; 

    for (let i = 0; i < text.length; i++) { 
        let char = text[i]; 

        if (freq[char]) { 
            freq[char]++;
        } else { 
            freq[char] = 1;
        }
    }

    
    
    return freq; 
}

function isPalindrome(text) {
    let reversedText = ""; 

    for (let i = text.length - 1; i >= 0; i--) {
        reversedText += text[i]; 
    }
    

    if (text === reversedText) { 
        return true;
    } else {
        return false;
    }
}




