class Book {
    constructor(title, author, pages) {
      this.title = title; 
      this.author = author; 
      this.pages = pages; 
    }

    get details() {
      return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
  

    shortDescription() {
      return `This is a book titled "${this.title}".`;
    }
  

    isLongBook() {
      return this.pages > 300; 
    }
  }
  

  class AdventureBook extends Book {
    constructor(title, author, pages, setting, difficulty) {
      super(title, author, pages); 
      this.setting = setting; 
      this.difficulty = difficulty; 
    }
  

    isLongBook() {
      const baseResult = super.isLongBook();
      
      if (baseResult) {
        return `This is a long adventure book.`;
      } else {
        return `This adventure book is short and easy to read.`;
      }
    }

    adventureLevel() {
      return `The adventure difficulty is rated as: ${this.difficulty}.`;
    }
  }
  

  class SatireBook extends Book {
    constructor(title, author, pages, humorStyle, satireTarget) {
      super(title, author, pages);
      this.humorStyle = humorStyle; 
      this.satireTarget = satireTarget; 
    }

    isLongBook() {
      const baseResult = super.isLongBook();
      
      if (baseResult) {
        return `This satire book takes time to digest its humor.`;
      } else {
        return `This satire book is quick and sharp.`;
      }
    }

    humorDetails() {
      return `This book uses ${this.humorStyle} humor.`;
    }
  }
  

  class FantasyBook extends Book {
    constructor(title, author, pages, magicalWorld, mainCharacter) {
      super(title, author, pages);
      this.magicalWorld = magicalWorld;
      this.mainCharacter = mainCharacter; 
    }

    isLongBook() {
      const baseResult = super.isLongBook();
      
      if (baseResult) {
        return `This is an epic fantasy tale.`;
      } else {
        return `This fantasy book is a quick magical escape.`;
      }
    }
  
    magicalWorldDetails() {
      return `Explore the enchanting world of ${this.magicalWorld}.`;
    }
  }
  

  const adventureBook = new AdventureBook("Treasure Island", "Robert Louis Stevenson", 250, "a mysterious island", "medium");
  console.log(adventureBook.isLongBook()); 
  console.log(adventureBook.adventureLevel());
  
  const satireBook = new SatireBook("Gulliver's Travels", "Jonathan Swift", 100, "satirical", "human nature");
  console.log(satireBook.isLongBook());
  console.log(satireBook.humorDetails()); 
  
  const fantasyBook = new FantasyBook("Harry Potter", "J.K. Rowling", 450, "Hogwarts", "Harry Potter");
  console.log(fantasyBook.isLongBook()); 
  console.log(fantasyBook.magicalWorldDetails());
  