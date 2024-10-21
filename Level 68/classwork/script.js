function findAverage(array) {
  
    if (array.length === 0) {
      return 0; 
    }
  
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      sum += array[i]; 
    }
  
    let average = sum / array.length;
    
    return average; 
  }

  

  function smash(words) {
    let sentence = ""; 
  
    for (let i = 0; i < words.length; i++) {
      if (i > 0) {
        sentence += " "; 
      }
      sentence += words[i]; 
    }
  
    return sentence; 
  }