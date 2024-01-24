module.exports = class Character {
  constructor(name, lifePts, attackPts, defensePts) {
    this.name = name;
    this.lifePts = lifePts;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }
  attack(targetCharacter) {
    //metodo  para atacar que tem como argumento o personagem alvo (targetCharacter) e que subtrai os pontos de vida desse alvo (targetCharacter.lifePts) pela diferença entre os pontos de ataque do personagem (this.attackPts) do personagem atual (Character) e a defesa do alvo (targetCharacter.lifePts)
    targetCharacter.lifePts -= this.attackPts - targetCharacter.defensePts;
  }
};
