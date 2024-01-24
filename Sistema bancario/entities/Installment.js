module.exports = class Installment {
  constructor(value, number) {
    this.value = value; //Valor em dinheiro das parcelas//
    this.number = number; // Quantidade de parcelas do imprestimo//
    this.status = "pending";

    //Status da parcela: pago ou pendente. Nesse caso sempre será pendente(pending)//
  }
};
