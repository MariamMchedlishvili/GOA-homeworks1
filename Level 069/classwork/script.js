const numbers1 =  [10, 5, 6, 7, 2, 3];
const numbers2 = [5, 6, 7, 8, 9];

const combArr = numbers1.concat(numbers2)
//concat  აერთიანებს ელემენტებს

numbers1.push("mariami");
//.push-ით ვამატებთ ელემენტს.
numbers.pop();
//pop-ით ვაშორებთ ელემენტს.

const removedElement = 
console.log(numbers1)


const fruits1 = ["Apple", "strawberry", "watermelon"];
fruits1.sort();
//sort - ახარისხებს მასივს ანბანის მიხედვით

const fruits2 = ["Apple", "strawberry", "watermelon"];
fruits2.reverse();
//reverse - აბრუნებებს მასივის ელემენტებს

//length - აბრუნებს მასივის სიგრძეს

const arr1 = [];
console.log(arr1.length);

const arr = [10, 20, 30];
console.log(arr.length);

const fruits3 = ["Apple", "strawberry", "watermelon"];
let size = fruits3.length;


//toString - მასივს გარდაქმნის სტრიქონად

const numbers = [1, 2, 3, 4];
console.log(numbers.toString());

const fruits4 = ["Apple", "strawberry", "watermelon"];
fruits4.toString();

const mixed = [1, "apple", true];
console.log(mixed.toString())


//at - გამოაქვს ელემენტი რომელ ინდექსზეც არის მითითებული

const fruits5 = ["Apple", "strawberry", "watermelon"];
let fruit = fruits5.at(3);

const arr2 = [100, 200, 300];
console.log(arr2.at(1));

const arr3 = [5, 10, 15, 20];
console.log(arr3.at(-1));

//join - აერთიანებს მასივის ელემენტებს, და ასევე შეგვიძლია მათ გამოსაყოფად მივუთითოთ რაიმე სიმბოლო

const fruits6 = ["Apple", "strawberry", "watermelon"];
fruits6.join("*");

const number = [1, 2, 3, 4];
console.log(number.join("-"));
