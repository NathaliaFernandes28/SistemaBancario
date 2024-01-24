//Neste arquivo vamos exportar os outros arquivos e depois vamos fazer a instancia das classes dos outros arquivos.

const Author = require("./Author");
const John = new Author("Nathalia Fernandes");

const post = John.writePost(
  // Aqui colocamos a instancia do post com a instancia da classe Author com o método writePost que colocamos no arquivo do Author//
  "Título do Post",
  "Conteúdo do post escrito por Nathalia Fernandes"
);

post.addComment("Lucas Fernandes", "Muito Legal"); //Aqui colocamos a instancia da classe post com o método que chamamos no arquivo post, para adicionarmos ao post do author um comentário//
post.addComment("Rosane Fernandes", "Muito interessante!"); //Aqui colocamos a instancia da classe post com o método que chamamos no arquivo post, para adicionarmos ao post do author um comentário//

console.log(John);
console.log(post);
