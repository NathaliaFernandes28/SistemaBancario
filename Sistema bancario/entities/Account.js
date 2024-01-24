module.exports = class Account {
  #balance; //Propriedade privada (saldo)//
  constructor(user) {
    this.owner = user; //Dono da conta //
    this.#balance = 0; //Vamos começar a conta com o saldo em zero//
    //Aqui vamos criar arrays para colocarmos todos os depositos, emprestimos e transferencia//
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }
  //Metodo nativo get para ler o atributo privado #balance//
  get balance() {
    return this.#balance;
  }
  //Metodos para realizar depositos, emprestimos e transferencias//
  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }
  addLoan(loan) {
    this.#balance += loan.value;
    this.loans.push(loan);
  }
  addTransfer(transfer) {
    //Precisamos verificar se a transferencia foi feito para o dono da conta//
    //Se o email do toUser(Que está recebendo o dinheiro) for igual ao email do dono da conta, o valor da transferencia será somado ao saldo da conta. Isso quer dizer que o dono da conta recebeu uma transferência.//
    if (transfer.toUser.email === this.owner.email) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
    } else if (transfer.fromUser.email === this.owner.email) {
      // Se o email do fromUser(que está transferindo o dinheiro) for igual ao email do dono da conta, o valor da transferencia será subtraido do saldo da conta. Isso quer dizer que o dono da conta fez uma transferencia.//
      this.#balance -= transfer.value;
      this.transfers.push(transfer);
    }
  }
};
