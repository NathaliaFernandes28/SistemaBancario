const Account = require("./Account");
module.exports = class User {
  constructor(email, fullName) {
    this.email = email;
    this.fullName = fullName;
    //Vamos fazer referencia a conta do usuário usando a instância da classe account//
    this.account = new Account(this);
  }
};
