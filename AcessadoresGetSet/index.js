//Acessador get - Apenas leitura das propriedades de um objeto//
class wallet {
  #valor; //Atributo privado//
  constructor() {
    this.#valor = 8000; //Vamos setar o valor da carteira//
  }
  //Vamos acessar o valor da carteira que está privada com o acessador get//
  get valor() {
    return this.#valor; //Aqui vamos retornar o valor da carteira, dentro do acessador get//
  }
}

const myWallet = new wallet(); // Vamor instanciar o objeto wallet//
console.log(myWallet.valor); // Vamos retornar o resultado do código com o console.log()//

class wallet {
  donoDaCarteira;

  set donoDaCarteira(NovodonoDaCarteira) {
    if (typeof NovodonoDaCarteira === "string") {
      this.donoDaCarteira = NovodonoDaCarteira;
    } else {
      console.log("O dono da carteira não foi identificado...");
    }
  }
}

const myWallet = new wallet();
myWallet.donoDaCarteira = "Nathalia";
console.log(myWallet.donoDaCarteira);
