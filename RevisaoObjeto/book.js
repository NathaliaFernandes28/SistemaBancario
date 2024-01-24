class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }
  published() {
    this.published = true;
  }
}

const eldest = new Book("Eldest");
const eragon = new Book("Eragon");

console.log(eragon);
console.log(eldest);
console.log(eragon instanceof Book);
