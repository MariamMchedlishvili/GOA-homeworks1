let car = {
  brand: "Porsche",
  model: "GT3",
  year: 2022,
  color: "Silver",
  
  startEngine: function() {
    console.log("Engine started");
  },

  
  owner: {
    name: "Mariam Mchedlishvili",
    age: 16
  }
};

console.log(car.brand); 
console.log(car.year);  
 

car.year = 2023;


delete car.color;

car.startEngine(); 

console.log(car.owner.name); 
console.log(car.owner.age);  


console.log(car);