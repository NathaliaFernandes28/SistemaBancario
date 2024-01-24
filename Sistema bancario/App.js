//Vamos começar importando os arquivos das classes já criadas//
const Deposit = require("./entities/Deposit");
const Loan = require("./entities/Loan");
const Tranfer = require("./entities/Transfer");
const User = require("./entities/User");
const Installment = require("./entities/Installment");
//Agora vamos exportar o arquivo que vamos criar agora//
module.exports = class App {
  //Vamos colocar um atributo static e privado para a lista de usuários da aplicação.//
  static #users = [];
  //Metodo estatico para encontrar um usuário pelo o email//
  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }
  //Metodo estático para criar usuário pelo email e o nome completo//
  static createUser(email, fullName) {
    //Se o usuário existir vamos encontra-lo por email//
    const userExists = App.findUser(email);
    //se ele não existir//
    if (!userExists) {
      //Vamos adicionar o novo usuário com o push no array #users e vamos salvar na instancia new User com as informações email e fullName//
      this.#users.push(new User(email, fullName));
    }
  }
  //Metodo para criar um deposito, com as informações do email do usuário e com o valor do deposito.//
  static deposit(email, value) {
    //Vamos verificar se já existe o email do usuário cadastrado, se já, vamos procurar esse email pelo metodo findUser criado acima.//
    const user = App.findUser(email);
    //Se o email do usuário existir//
    if (user) {
      //Vamos criar um novo deposito fazendo uma instancia da classe Deposit//
      const newDeposit = new Deposit(value);
      //Uma vez o deposito criado, vamos adicionar esse deposito(newDeposit) dentro do metodo addDeposit que foi criado dentro da classe account.//
      user.account.addDeposit(newDeposit);
    }
  }
  //Vamos criar um metodo estático para criar uma transferencia com as informações do email de quem enviou a transferencia, com o email de que recebeu o email e o valor dessa transferencia.//
  static Transfer(fromUserEmail, toUserEmail, value) {
    //Vamos procurar o email de quem enviou a tranferencia no sistema com o metodo findUser.//
    const fromUser = App.findUser(fromUserEmail);
    //Vamos procurar o email de quem recebeu a transferencia no sistema com o metodo findUser.//
    const toUser = App.findUser(toUserEmail);
    //Com os dois emails dos usuários encontrados, vamos criar a transferencia.//
    //Se fromUser e toUser for verdadeiros//
    if (fromUser && toUser) {
      //Vamos criar a transferencia, criando uma instancia da classe Transfer, salvando essa transferencia na nova instancia criada(newTransfer), com as informações do email do usuário que enviou a transferencia, do usuário que recebeu a transferencia e o valor dessa transferencia.//
      const newTransfer = new Tranfer(fromUser, toUser, value);
      //Vamos agora salvar essa nova transferencia que criamos dentro do metodo addTransfer que foi criado dentro da classe account, usando o email do usuário que enviou e que recebeu a transferencia.//
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }
  //Vamos criar um metodo estático para criar o emprestimo com o email do usuário que quer fazer o emprestimo, o valor desse emprestimo e a quantidade de parcelas desse emprestimo.//
  static takeLoan(email, value, numberOfInstallments) {
    //Vamos procurar o email do usuário que quer fazer o emprestimo com o metodo findUser criado anteriormente.//
    const user = App.findUser(email);
    //Uma vez encontrado o email do usuário//
    if (user) {
      //Vamos criar o emprestimo e salva-lo na instancia da classe Loan(newLoan), com as informações do valor desse emprestimo e o número de parcelas desse emprestimos.//
      const newLoan = new Loan(value, numberOfInstallments);
      //Vamos agora acrescentar esse emprestimo criado dentro do metodo addLoan que está dentro da classe account.
      user.account.addLoan(newLoan);
    }
  }
  //Vamos criar um metodo estático para alterar a taxa de juros do emprestimo.//
  //newFeePercentage = um metodo criado anteriormente para calcular a taxa de juros do emprestimo.//
  static changeLoanFee(newFeePercentage) {
    //Vamos guardar esse metodo que calcula a taxa de juros dentro da propriedade fee que está dentro da classe Loan.//
    Loan.fee = newFeePercentage;
  }
};
