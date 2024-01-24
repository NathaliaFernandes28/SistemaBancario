const Comment = require(".//comment");

class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = []; //Array dos comentários//
    this.createdAt = new Date(); // Data para os comentários//
  }
  addComment(username, content) {
    this.comments.push(new Comment(username, content));
  }
}

module.exports = Post; //Vai exportar o arquivo para outro arquivo//
