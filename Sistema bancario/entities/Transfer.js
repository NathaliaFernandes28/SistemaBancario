module.exports = class Transfer {
  constructor(fromUser, toUser, value) {
    this.fromUser = fromUser; //Dona da conta que fez a transferencia//
    this.toUser = toUser; //Dona da conta em que a transferencia é enviada//
    this.value = value; //Valor da transferencia//
    this.createdAt = new Date(); // Atributo nativo do js quando tratamos de data//
  }
};
