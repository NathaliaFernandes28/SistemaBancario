//SEGUNDO EXERCÍCIO //
// um atributo name, atribuível na instanciação
//um atributo description, atribuível na instanciação
//um atributo price, atribuível na instanciação
//um atributo inStock, inicializado sempre em 0
//um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
//um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado

//Criação de uma classe (product)
class product {
  //Dentro da classe product vamos criar seus atributos com o objeto próprio do javascropt constructor, colocando entre parenteses os parametros dessa classe, ou seja, vamos colocar aqui os parametros que queremos instanciar depois, copiar depois.//
  constructor(name, description, price) {
    //Aqui vamos setar que o name, description e price que vamos colocar na variavel intanciada é o mesmo do parametro da classe do constructor.
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  //um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock//
  addToStock(quantity) {
    this.inStock += quantity;
  }
  //um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado
  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}
//Intância cell da classe product//
const cell = new product("Redmi note 9c", "Melhor celular do momento", 1200);
//Vamos chamar a função addToStock com a instância cell para colocarmos a quantidade do produto em questão no estoque.//
cell.addToStock(100);
//Comando proprio do javascript para ver o resultado do que queremos no terminal//
console.log(cell);
//Vamos chamar a função calculateDiscount com a instância cell para darmos o desconto em cima do valor do produto em questão.//
cell.calculateDiscount(10);
//Comando proprio do javascript para ver o resultado do que queremos no terminal. Temos que colocar o nome da instancia dentro do comando console.log.//
console.log(cell);
