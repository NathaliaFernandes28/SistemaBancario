//Hoje nós vamos estudar herança entre classes. Existem classes que tem os memos métodos e atributos que outras classes, para não precisarmos repetir os mesmos metodos e atributos, usamos a herança entre elas. Para isso, precisamos usar a propriedade extends entre uma classe e outra. Vamos ao exemplo://

class Property {
  //Primeira classe//
  constructor(area, price) {
    //parametros: area e price//
    this.area = area; //Atributos da classe property//
    this.price = price; //Atributos da classe property//
  }

  getPricePerSquareMeter() {
    // metodo da classe property - metodo que calcula o valor por area da propiedade. //
    return this.price / this.area; //A função retornará o calculo do valor por area da propriedade//
  }
}

class House extends Property {
  //Usando a propriedade "extends" você está dizendo que a classe Property é a classe mãe e a classe House é a classe filha e que a classe House herda os elementos, metodos e parametros da classe property.//
}
//Agora vamos fazer as instancias das classes,tanto House quanto Property//
const land = new Property(200, 30000); //Instancia da classe Property//
const someHouse = new House(300, 200000); //Instancia da classe House//

console.log(land);
console.log(someHouse);
console.log(someHouse instanceof Property); //A propriedade "instanceof" verifica se o objeto "someHouse" é uma instancia da classe Property. Se for, o resultado será true, se não o resultado será false. Ele sempre retorna um valor booleano.//
//Como o objeto someHouse é uma instancia da classe House, que é uma herança da classe Property, o objeto someHouse vai ser, por conseguencia, uma instancia da classe Property. //

//Se quisermos, além de herdar os elementos da classe mãe, podemos também criar novos elementos na classe filha. Vamos ao exemplo://

class Apartment extends Property {
  //Criamos uma classe Apartament que está herdando os elementos da classe Property.//
  constructor(number, area, price) {
    //Vamos criar o parametro number e vamos herdar o parametro area e price da classe Property.//

    //Para referenciarmos os valores da Property, area e price, que nós estamos herdando, temos que usar a propriedade super.
    super(area, price);
    //Já para referenciarmos o metodo number que criamos, fazemos da mesma forma://
    this.number = number;
  }
  //Podemos também criar novos metodos dentro da classe Apartment que foi herdada da classe Property.//
  getFloor() {
    //Esse metodo calcula qual o andar o apartment da class apartment está localizado.
    return this.number.slice(0, -2); //Esse é o calculo//
  }
}

//Agora vamos instanciar a classe Apartment//
const apt = new Apartment("1202", 149, 20000); // Aqui vamos criar um objeto que é uma instancia da classe Apartment e vamos colocar como parametro desse objeto os valores reais que queremos relacionar ao parametro da classe Apartment//

console.log(apt); //Propriedade natural do javascript onde nos retorna o resultado do código usado no terminal.//
console.log(apt.getFloor()); //Aqui estamos pegando o metodo getfloor, que está dentro da classe Apartment, que dar como retorno o andar do apartamento.//

//Como a classe Apartment é uma herança da classe Property, e apt é uma instancia da classe Apartment, nós também podemos pegar, com o console.log, o metodo getPricePerSquareMeter(), mesmo ele sendo um metodo da classe Property. //
console.log(apt.getPricePerSquareMeter()); //Aqui vai calcular o valor por area da  classe Apartment, através da instancia apt.
