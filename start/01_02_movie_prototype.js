// Write your code here

class Movie {
  constructor(title, director, genre, releaseYear, rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview(){
    console.log(`${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`);
  }
}

const movie = new Movie('Animal', 'Vanga', 'Action', '2023', '4.5');

movie.getOverview()

function MovieFnPrototype(title, director, genre, releaseYear, rating){
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
}

MovieFnPrototype.prototype.getOverview = function(){
     console.log(`${this .title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`);
}

const movieFnPrototypeObj = new movieFnPrototype('Animal', 'Vanga', 'Action', '2023', '4.5');

movieFnPrototypeObj.getOverview()