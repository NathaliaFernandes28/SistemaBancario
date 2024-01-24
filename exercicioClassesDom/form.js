import { component } from "./component.js"; //Aqui vamos importar a classe component do arquivo component.js

export class form extends component {
  //Aqui vamos exportar a subclasse e vamos informar que a subclasse form é uma instância da classe mãe component.//
  constructor(parent, options) {
    //Aqui vamos construir um construtor com as parmetros iguais da classe mãe, parent e options. Para referenciar esses parametros e acrescentar mais um parametro a subclasse form, vamos usar o metodo global super.//
    super("form", parent, options);
  }

  addChildren(...children) {
    //Vamos usar o metodo addChildren para acrescentar elementos filhos dentro do parametro form. Vamos acrescentar através de um array.//
    children.forEach((child) => {
      //Para cada elemento do array de children, nós vamos referenciar o metodo getElement, que ler o elemento dentro do element Privado e depois vamos ligar ele ao novo elemento do array que será acrescentado.
      this.getElement().appendChild(child.getElement());
    });
  }
}

//Depois de criarmos a subclasse form e todas as outras subclasses, vamos testar a nossa aplicação. Para isso, vamos criar um arquivo index.js, onde vamos importar todos os arquivos das subclasses e o arquivo da classe mãe e vamos criar também um arquivo index.html.//
