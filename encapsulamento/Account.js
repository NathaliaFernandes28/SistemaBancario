class Account {
  //Classe Account
  //Além de colocarmos a "#" na frente do atributo que está dentro do constructor dessa Account, temos que colocar esses mesmos atributos com a "#" fora do constructor, temos que colocar exatamente aqui.//

  #password;
  #balance = 0;
  constructor(user) {
    //Construtor dessa classe//
    this.email = user.email; //Atributo da classe - Estamos dizendo que o email dessa conta vai ser o email do usuário, email que ele colocar. Colocamos a "#" na frente do atributo email para torná-lo privado, impossibilitando assim o manuseio do seu valor por terceiros. //
    this.#password = user.password; //Atributo da classe - Estamos dizendo que a senha dessa conta vai ser a senha do usuário, a senha que ele colocar.  Colocamos a "#" na frente do atributo password para torná-lo privado, impossibilitando assim o manuseio do seu valor por terceiros. ////
  }
  //Para conseguirmos ver a informação da senha da conta que está privado,temos que criar um método dentro do Account.//
  getBalance(email, password) {
    //Vamos passar como parametro para o metodo getBalance o email e o password.
    if (this.email === email && this.#password === password) {
      //Aqui estamos dizendo que se o email do usuário, que está privado for igual ao email fornecido como parametro do metodo getBalance, nós iremos retornar o balance, iremos mostrar a quantia de dinheiro da conta do usuário. Vamos fazer a mesma coisa com a senha do usuário, o password do usuário, se o parametro password do metodo getBalance for igual a senha do usuário que está privado, nós também retornamos o saldo da conta do usuário.
      return this.#balance;
    } else {
      // Se não for igual, nós retornaremos um erro. - null.//
      return null;
    }
  }
}
const user = {
  //Objeto criado a partir do construtor user, dando assim o valor aos atributos email e password.//
  email: "oliveiranfernandes@gmail.com",
  password: "jornalismo",
};

const myAccount = new Account(user); //Instancia criada a partir da classe Account, com o parametro user do construtor da mesma classe. //

console.log(myAccount); // Método próprio do javascript onde conseguimos vizualizar o resultado do nosso código no terminal.//

// Como o atributo password é público, qualquer pessoa consegue modificar o valor desse atributo.
//Quando tornamos esse atributo publico, ninguem consegue modificar o valor desse atributo.//
console.log(myAccount);
console.log(myAccount.getBalance("oliveiranfernandes@gmail.com", "jornalismo")); //Como criamos um metodo verificando se a senha e o email informados são iguais a senha e o email do usuário e esse metodo é publico, podemos acessar esse metodo fora da classe com a propriedade console.log. Precisamos também colocar como parametro desse metodo as informações que queremos verificar se é igual com as informações do usuário.//
