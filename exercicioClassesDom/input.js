import { component } from "./component.js"; //Aqui vamos começar importando a classe component do arquivo component.js//

export class input extends component {
  // Aqui vamos exportar a subclasse que estamos criando, input, e vamos informar que a subclasse input é uma extenção  da classe component//
  constructor(parent, options) {
    //Aqui nos vamos pegar os parametros da classe mãe component parent e options e vamos referenciar esses parametros com o uso do metodo global do javascript super.//
    super("input", parent, options); //Aqui vamos, além de referenciar os parametros parent e options da classe mãe component, vamos acrescentar um parametro tag com o valor de input, que é o que queremos criar. //
  }
}

//Com a subclasse input criada, e com os parametros referenciados da classe mãe e com o parametro tag incluso, com o valor input, vamos passar para a próxima etapa do exercício, a criação de mais uma subclasse, a label.
