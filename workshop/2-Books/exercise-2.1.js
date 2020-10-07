// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

const book1 = new Book("A Long Way Gone", "Biography", "Ishmael Beah", true);
const book2 = new Book(
  "HP: and the Prisoner of Azkhaban",
  "Fiction",
  "JK Rowling",
  true
);
const book3 = new Book(
  "LoTR: Return of the King",
  "Fiction",
  "JRR Tolkien",
  false
);
const book4 = new Book(
  "The Charisma Myth",
  "Non-Fiction",
  "Olivia Fox Cabane",
  true
);
const book5 = new Book("Bleachers", "Fiction", "John Grisham");

console.log(book1, book2, book3, book4, book5);
