function Person(name, age) {
    this.name = name; 
    this.age = age;   
  
    this.introduce = function() {
      console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    };
  }
  
  let person1 = new Person("John", 25);
  person1.introduce(); 
  



  function Book(title, author) {
    this.title = title; 
    this.author = author || "Unknown"; 
  
    this.getDetails = function() {
      console.log("Title: " + this.title + ", Author: " + this.author);
    };
  }
  
  let book1 = new Book("JavaScript Basics");
  book1.getDetails();  
  



  function Classroom(students) {
    this.students = students; 
  
    this.countStudents = function() {
      console.log("Number of students: " + this.students.length);
    };
  }
  
  let class1 = new Classroom(["Mariami", "Lizi", "Nikolozi"]);
  class1.countStudents(); 
  


function Counter() {
  this.value = 0; 

  this.increment = function() {
    this.value += 1; 
  };

  this.getValue = function() {
    console.log(this.value); 
  };
}

let counter1 = new Counter();
counter1.increment();
counter1.getValue();  



function Light() {
    this.state = "off"; 
  
    this.toggle = function() {
      if (this.state === "off") {
        this.state = "on";
      } else {
        this.state = "off"; 
      }
      console.log("The light is now " + this.state);
    };
  }
  
  let light1 = new Light();
  light1.toggle();  
  


  function Product(name, price) {
    this.name = name; 
    this.price = price; 
  
    this.getDetails = function() {
      console.log("Product: " + this.name + ", Price: " + this.price + " USD");
    };
  }
  
  let product1 = new Product("Laptop", 999);
  product1.getDetails();  
  


  function User(username, contact) {
    this.username = username; 
    this.contact = contact;   
  
    this.getContactInfo = function() {
      console.log("Email: " + this.contact.email + ", Phone: " + this.contact.phone);
    };
  }
  


  function Library(books) {
    this.books = books; 
    this.listBooks = function() {
      this.books.forEach(function(book) {
        console.log("Title: " + book.title + ", Author: " + book.author);
      });
    };
  }





function Cart() {
    this.items = []; 
    this.addItem = function(item) {
      this.items.push(item); 
    };
  
    this.getItems = function() {
      this.items.forEach(function(item) {
        console.log("Item: " + item); 
      });
    };
  }



  
  function Student(name, marks) {
    this.name = name; 
    this.marks = marks; 
  
   
    this.hasPassed = function() {

      let totalMarks = this.marks.reduce(function(sum, mark) {
        return sum + mark;
      }, 0);
  
      let averageMark = totalMarks / this.marks.length;
  
      return averageMark >= 50;
    };
  }
  

  