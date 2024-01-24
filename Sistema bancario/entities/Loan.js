const Installment = require("./Installment");
module.exports = class Loan {
  static #fee = 1.05; // Taxa de juros à 5%//
  constructor(value, Installments) {
    this.value = value;
    this.Installments = []; //Vamos criar um array para colocar a quantidade de parcelas e os seus valores//
    //vamos calcular as parcelas e armazenar esse calculo no atributo Installment//
    for (let i = 1; i <= Installments; i++) {
      this.Installments.push(
        new Installment(value * Loan.#fee) / Installment,
        i
      );
    }
    this.createdAt = new Date();
  }
  //Objeto statico para lermos atributo privado, no caso o atributo static #fee//
  static get fee() {
    return Loan.#fee;
  }
  //Objeto statico para setarmos, modificarmos o atributo privado, no caso o atributo static #fee//
  static set fee(newfeePercentage) {
    //Vamos criar um parametro  para calcularmos a nova taxa de juros.//
    Loan.#fee = 1 + newfeePercentage / 100;
  }
};
