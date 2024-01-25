//Para finalizar vamos criar o arquivo que vai rodar toda a aplicação.//
//Vamos começar importando a classe App//
const App = require("./App");
//Vamos usar o metodo createUser para criar as informações dos usuários.//
App.createUser("oliveiranfernandes@gmail.com", "Nathalia Fernandes");
App.createUser("lucas@email.com", "Lucas Queiroga");
App.createUser("juliana@email.com", "Juliana Conde");

//Vamos colocar as informações para criar o deposito//
//Vamos fazer o deposito no valor de 200 na conta do usuário oliveiranfernandes@gmail.com.//
App.deposit("oliveiranfernandes@gmail.com", 200);

//Vamos colocar as informações para criar a transferencia//
//Vamos fazer uma transferencia no valor de 100 da conta do usuário oliveiranfernandes@gmail.com para a conta do usuário lucas@email.com.//
App.Transfer("oliveiranfernandes@gmail.com", "lucas@email.com", 100);

//Vamos usar o metodo changeLoanFee que calcula a nova taxa de juros para calcular a taxa de juros com o valor de 10.//
App.changeLoanFee(10);

//Vamos colocar as informações para criar um emprestimo.//
//Vamos fazer um emprestimo para a conta do usuário "juliana@email.com" no valor de 2000 com 24 parcelas.//
App.takeLoan("juliana@email.com", 2000, 24);

//Vamos agora usar o console.log para aparecer as informações da nossa aplicação no terminal.//

console.log(App.findUser("oliveiranfernandes@gmail.com"));
console.log(App.findUser("oliveiranfernandes@gmail.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
//Aqui vamos localizar a conta do usuário "juliana@email.com"//
console.log(App.findUser("juliana@email.com"));
//Aqui vamos localizar e acessar a conta da usuária "juliana@email.com"//
console.log(App.findUser("juliana@email.com").account);
//Aqui vamos localizar a conta da usuária "juliana@email.com",vamos acessar essa conta, vamos acessar o valor do emprestimo e a quantidade de parcelas desse emprestimo dessa conta.//
