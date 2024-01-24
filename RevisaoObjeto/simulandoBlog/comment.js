class Comment {
  constructor(username, content) {
    this.username = username;
    this.content = content;
    this.createdAt = new Date(); //Opcional, vai colocar data nos posts das pessoas. Data atual em que foi feito o post.
  }
}
module.exports = Comment; //Vai exportar o arquivo para outro arquivo//
