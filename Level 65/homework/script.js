const legalAge = 18; 
let age = 16; 

if (age >= legalAge) {
    console.log("You are adult.");
} else {
    let yearsMissing = legalAge - age; 
    console.log("You are not adult.");
    console.log("You are missing " + yearsMissing + " year(s)."); 
}