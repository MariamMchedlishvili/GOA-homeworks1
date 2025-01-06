function Person (firstName, lastName, age, country, isWorking) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.isWorking = isWorking;
}

const person1 = new Person("Mariami, Mchedlishvili, 16, Georgia, true");
const person2 = new Person("Nikolozi, Mchedlishvili, 12, Georgia, true");
const person3 = new Person("Nona, Chitarishvili, 42, Georgia, true");
const person4 = new Person("Mako, Xarashvili, 15, Georgia, true");

//კონსტრუქტორი არის ფუნქცია, რომელიც ქმნის ახალ ობიექტებს.
//new - ახალი, ქმნის ახალ ცარიელ ობიექტს.



function Person(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log("Hi, I am" + this.name + "and I am" + this.age  +"years old." );
      };

}

const person = new Person("Mariami", 16);
person1.introduce();



function Car(brand, year = 2020) {
    this.brand = brand;
    this.year = year;
  
    this.describe = function() {
      console.log("This is a " + this.brand + " from " + this.year + ".");
    };
  }


  function Library(name, books) {
    this.name = name;
    this.books = books;
  
    this.listBooks = function() {
      console.log("Books available in " + this.name + ":");
      this.books.forEach(function(book) {
        console.log(book); 
      });
    };
  }