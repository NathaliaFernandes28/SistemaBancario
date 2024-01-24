class PaperStore {
  #price;

  constructor(price, name, quantity) {
    this.#price = price;
    this.name = name;
    this.quantity = quantity;
  }
  getPriceForEach() {
    return this.price / this.quantity;
  }
}

class Pen extends PaperStore {}

const paperStore = new PaperStore(300, "Paper Store", 100);
const pen = new Pen(200, "Caneta", 50);

console.log(paperStore);
console.log(pen);
console.log(pen.getPriceForEach());

class Pencil extends PaperStore {
  constructor(color, name, price, quantity) {
    super(name, price, quantity);
    this.color = color; //Acrescentei o atrinuto color na classe Pencil e herdei os atributos name, price e quantity da classe mãe PaperStore.
  }
  getPriceForEach() {
    return this.price / this.quantity;
  }
}
//Vamos instanciar//
const somePencil = new Pencil("Red", "Lápis de cor da Faber Castel");
console.log(somePencil);
console.log(somePencil instanceof PaperStore);
