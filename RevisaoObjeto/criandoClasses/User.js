//Criação de uma classe (User)//
class User {
  //Dentro da classe User vamos criar seus atributos com o objeto próprio do javascropt constructor, colocando entre parenteses os parametros dessa classe, ou seja, vamos colocar aqui os parametros que queremos instanciar depois, copiar depois.//
  constructor(fullname, email, password) {
    //Aqui vamos setar que o fullname, email e password que vamos colocar na variavel intanciada é o mesmo do parametro da classe do constructor.
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  //Como o exercício pedia, vamos colocar aqui um metodo referente ao login para verificar se o email e a senha que o usuário vai colocar para se logar está correta.//
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Erro ao fazer o Login! Email ou senha incorretos.");
    }
  }
}
//Aqui vamos instanciar a classe user criando uma variável baseado na classe User. //
const jonh = new User(
  "Nathalia Fernandes",
  "oliveiranfernandes@gmail.com",
  "jornalismo"
);
//Vamos agora verificar se o usuário, nesse caso o jonh, consegue fazer login//
jonh.login("oliveiranfernandes@gmail.com", "jornalismo");

//Para verificarmos se os atributos da instancia criada com a variavel jonh está correta//
console.log(jonh);
