import { component } from "./component.js"; // Vamos importar a classe component do arquivo component.js//

export class label extends component {
  //Aqui vamos importar a subclasse label e informar que essa subclasse é uma extenção da classe mãe component//
  constructor(text, parent, options) {
    //Aqui vamos pegar os parametros da classe mãe component, parent e options, e vamos referenciar esses parametros com o uso do metodo global do javascript super.//
    super("label", parent, Object.assign({}, options, { textContent: text })); //Aqui vamos, além de referenciar os parametros parent e options da classe mãe component, vamos acrescentar um parametro text com o valor de label, que é o que queremos criar. //
    //Neste caso, nós queremos colocar o text label dentro do options, para isso temos que usar o objeto global object.assign, com um parametro vazio e depois vamos inserir o que queremos colocar dentro desse parametro, que nesse caso é o text com o valor label.//
  }
}
