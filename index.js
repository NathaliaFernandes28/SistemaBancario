//const book = {
// title: "MoonLight",
// pages: "1500",
// published: true,
// inStock: 20,
// tags: ["terror", "aventura", "Vampiro"],
// author: {
//    name: "Stefer Meier",
// },
// addOnStock(quantity) {
//  //Metódo
//  this.inStock += quantity;
// },
//save: function () {
//Vamos colocar as informações no banco de dados//
// },
//};
//book.addOnStock(500);

//console.log(book);

function Book(name, author) {
  this.name = name;
  this.author = author;
}

const MoonLight = new Book("MoonLight", "Estefer Meier");
const Senhora = new Book("Senhora", "José de Alencar");
const Curtico = new Book("Curtiço", "José de Alencar");
const MaisPesadoQueoCeu = new Book("Mais Pesado que o Ceú", "Kurt Cobain");

console.log(MoonLight);
console.log(Senhora);
console.log(Curtico);
console.log(MaisPesadoQueoCeu);
