function greet() {
    console.log("Mariam Mchedlishvili");
}
greet();

//ფუნქციას ვქმნით function keyword-ით, რომელსაც შემდეგ მოყვება ფუნქციის სახელი,
// console.log() გამოიყენება ბრაუზერის კონსოლში დასაბეჭდად.
//შემდეგ ვიძახებთ ფუნქციას, ფუნქციის სახელით.




const button = document.getElementById("KnowMe");

button.addEventListener("click", function() {
    alert("Mariam Mchedlishvili");
});

//const ღილაკი = document.getElementById("KnowMe");- ეს ხაზი პოულობს ღილაკს HTML-ში მისი id-ის გამოყენებით და ინახავს მას 
//ცვლადში. button.addEventListener("click", function()):ამ ხაზითჩვენ ღილაკზე დაკლიკების შემდეგ შეტყობინება გამოგვაქვს. 
//alert გამოაქვს სიგნალი სადაც წერია შეტყობინება.


//Indentation is essential aspect that hepls us to read code easily and code looks more organized.
//Comments are notes in the code that help explain what the code does.
//They are not executed by the program and are used to make the code easier to understand. 
//Choosing right name for variable is crucial, because it helps us to understand what code is about.

const firstName = prompt("Please enter your first name:");
console.log(firstName);