module.exports = class Deposit {
  constructor(value) {
    this.value = value;
    this.createdAt = new Date();
    //Date() -> Objeto nativo do Js. Usado quando se trata de data no momento que a ação está acontecendo//
  }
};
