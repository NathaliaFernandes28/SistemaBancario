const Character = require("./character");

module.exports = class Warrior extends Character {
  constructor(name, lifePts, attackPts, defensePts, shieldPts) {
    super(name, lifePts, attackPts, defensePts);
    this.shieldPts = shieldPts;
    this.stance = "attacking";
  }
  attack(targetCharacter) {
    if (this.stance === "attacking") {
      super.attack(targetCharacter);
    }
  }
};

switchStance();
{
  if (this.stance === "attacking") {
    this.stance = "defending"; //se estiver em posição de defesa//
    this.defensePts += this.shieldPts; //Pontos de defesa tem que ser somado com o ponto de escudo//
  } else {
    this.stance = "attacking"; //se estiver em posição de ataque//
    this.defensePts -= this.shieldPts; //comportamento normal//
  }
}
//Vamos criar a nova classe chamada Warrior, que é uma extensão da classe Character//
//Vamos colocar o mesmo constructor da classe Character//
//Vamos usar o metodo super para referenciar os parametros que foram extendidos da classe Character//
//Depois vamos setar o parametro shieldPts como ele mesmo. //
//Logo depois vamos setar a posição do personagem como ataque.//
//Depois vamos subescrever o metodo de attack pa ra que ele só aconteça se a posição atual for de ataque//
//Por fim, vamos fazer um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).
