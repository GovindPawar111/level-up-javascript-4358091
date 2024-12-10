// Write your code here
class book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  getAvailability() {
    if(this.numCopies <= 0){
      return "out of stock";
    }if(this.numCopies < 10){
      return "in stock";
    }
    return "in stock";
  }

  sell(numSold = 1){
    this.numCopies = this.numCopies - numSold;
  }

  restock(numCopies = 5){
    this.numCopies = this.numCopies + numCopies;
  }
}