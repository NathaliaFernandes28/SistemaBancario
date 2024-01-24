const Character = require("./character");

module.exports = class Mage extends Character {
  constructor(
    name,
    lifePts,
    attackPts,
    defensePts,
    magicPts //O construtor vai ser o mesmo do construtor da classe Character. //
  ) {
    super(name, lifePts, attackPts, defensePts); //Vamos repetir os parametros do constructor com o metodo super//
    this.magicPts = magicPts; //vamos resetar o parametro magicPts como ele mesmo//
  }
};
//Aqui vamos subescrever o metodo de ataque para colocar um modo de calculo diferente, como o exercicio pede.//
attack(targetCharacter);
{
  targetCharacter.lifePts -=
    this.attackPts + this.magicPts - targetCharacter.defensePts;
}
//Vamos aqui criar outro metodo, um metodo que aumenta os pontos de vida de um personagem, assim como está pedindo no exercício//

heal(targetCharacter);
{
  targetCharacter.lifePts += this.magicPts * 2;
}
