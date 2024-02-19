class BookClub {
  library;
  books;
  members;

  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }

  addBook(title, author) {
    let book = this.books.find((b) => b.title == title);

    if (!book) {
      this.books.push({ title, author });
      return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    } else {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    }
  }

  addMember(memberName) {
    let member = this.members.find((m) => m.memberName == memberName);

    if (!member) {
      this.members.push({ memberName });
      return `Member ${memberName} has been joined to the book club.`;
    } else {
      return `Member ${memberName} is already a part of the book club.`;
    }
  }

  assignBookToMember(memberName, bookTitle) {
    let member = this.members.find((m) => m.memberName == memberName);
    let book = this.books.find((b) => b.title == bookTitle);

    if (!member) {
      throw new Error(`Member ${memberName} not found.`);
    }
    if (!book) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }
    if (member && book) {
      this.books = this.books.filter((b) => b.title !== bookTitle);
      return `Member ${memberName} has been assigned the book "${bookTitle}" by ${book.author}.`;
    }
  }

  generateReadingReport() {
    if (this.members.length == 0) {
      return "No members in the book club.";
    }
    if (this.books.length == 0) {
      return "No available books in the library.";
    }
    if (this.members.length > 0 && this.books.length > 0) {
      let result = [`Available Books in ${this.library} library:`];
      this.books.forEach((b) => {
        result.push(`"${b.title}" by ${b.author}`);
      });
      return result.join("\n");
    }
  }
}

const myBookClub = new BookClub("The Bookaholics");
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());
