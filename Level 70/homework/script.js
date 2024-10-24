//სტატიკური მასივი - არის მასივი ფიქსირებული ზომით. ეს ნიშნავს, რომ თქვენ არ შეგიძლიათ შეცვალოთ მასივის ზომა მოგვიანებით, მისი შექმნის შემდეგ.
let staticArray = [10, 20, 30, 40, 50];

console.log(staticArray[0]); 
console.log(staticArray[1]); 


staticArray[5] = 60; 
console.log(staticArray);


//დინამიური მასივი არის მასივი, რომელსაც შეგვიძლია შევუცვალოთ ზომა. საჭიროებისამებრ
//შეგიძლიათ დაამატოთ ან წაშალოთ ელემენტები. ეს მას უფრო მოქნილს ხდის, ვიდრე სტატიკური მასივი.

let dynamicArray = [];
//დავამატოთ ელემენტები მასივში
dynamicArray.push(10); 
dynamicArray.push(20); 
dynamicArray.push(30); 

console.log(dynamicArray); 

// წავშალოთ ბოლო ელემენტი
dynamicArray.pop(); 
console.log(dynamicArray); 

// დავამატოთ ელემენტი
dynamicArray.push(40);
dynamicArray.push(50);
console.log(dynamicArray);