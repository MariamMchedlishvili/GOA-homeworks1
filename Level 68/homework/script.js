function booleanToString(b) {
    if (b === true) {
      return "true"; 
    } else {
      return "false"; 
    }
  }



  function digitize(n) {
    let digits = []; 
  
    let numberString = n.toString();
  
    for (let i = numberString.length - 1; i >= 0; i--) {
      let digit = Number(numberString[i]);
      digits.push(digit);
    }
  
    return digits; 
  }
  


  function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;
  
    if (average >= 90) {
      return 'A';
    } else if (average >= 80) {
      return 'B'; 
    } else if (average >= 70) {
      return 'C'; 
    } else if (average >= 60) {
      return 'D';
    } else {
      return 'F'; 
    }
  }


  const areaOrPerimeter = function(l, w) {
    if (l === w) {
      return l * w; 
    } else {
      return 2 * (l + w); 
    }
  };


  