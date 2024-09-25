const blackWidow = {
    realName: "Natasha Romanoff", 
    role: "Superheroine",          
    suitColor: "Black",            
    hairColor: "Red",              
    origin: "Russia",
};


console.log(blackWidow.realName); 
console.log(blackWidow.role);      
console.log(blackWidow.suitColor); 
console.log(blackWidow.hairColor); 
console.log(blackWidow.origin);   

blackWidow.suitColor = "White";   
blackWidow.origin = "S.H.I.E.L.D."; 

console.log(blackWidow.suitColor); 
console.log(blackWidow.origin);  

delete blackWidow.hairColor;