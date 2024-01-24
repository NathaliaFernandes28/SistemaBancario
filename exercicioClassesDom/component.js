export class component {
  //Vamos usar o atributo export porque estamos usando o ES60 doJavaScript,isso quer dizer que vamos rodar a nossa aplicação no navegador e não no terminal como de constume.//
  #element = null;
  constructor(tags, parent, options) {
    this.tags = tags;
    this.parent = parent;
    this.options = options;
    this.build();
  }
  getElement() {
    return this.#element; //Como o elemento #element é privado, temos que criar  um metodo público que retorne esse elemento privado conseguindo ler-lo sem modificar o seu valor.//
  }
  build() {
    //Vamos criar o metodo build para criarmos o elemento html que o enunciado do exercício pede com os parametros do construtor da classe component//
    this.#element = document.createElement(this.tags); //Aqui ele criou um elemento com o document.creatElement e associou com o elemento privado #element com o this.#element//
    Object.assign(this.#element, this.options); //Aqui nós vamos usar o objeto global Object com o atributo assign para inserir o elemento options dentro do elemento privado #element.
    return this; //Aqui vamos retornar o próprio metodo build e também a sua instancia.//
  }
  render() {
    //Objeto global do javascript que faz o elemento criado ser renderizado, ou seja, aparecer na tela do navegador, na tela do usuário. Para renderizarmos o elemento, para que ele apareça na tela do computador, vamos usar o parent.//
    if (this.parent instanceof component) {
      //verifica se o parent é uma instancia da classe component//
      this.parent.getElement().append(this.#element); //Você está lendo o elemento privado #element com a ajuda do metodo getElement, que é um metodo publico para ler o elemento privado. O append ajuda a renderizar, a colocar na tela do usuário o elemento privado #element.//
    } else {
      document.querySelector(this.parent).append(this.#element); //Quer dizer que se não for uma instancia da classe component, for apenas uma instring, o javascript vai procurar no html o elemento parent, que vai ser representado por um seletor, por isso o querySelector e depois vai colocar esse selector no tela do usuário, vai renderizar esse seletor com a ajuda do append, colocando ele dentro do elemento privado #element e depois renderizando na tela do usuário.//
    }
  }
}

//Feito a classe mais elaborada do exercício, vamos a subclasse da classe component, que foi pedida no exercício.//
