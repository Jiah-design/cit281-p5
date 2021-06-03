/*
    CIT 281 Project 5:

    Name: Jia Huang
*/

module.exports = class Monster {
  constructor({
    monsterName = "Unknown",
    minimumLife = 0,
    currentLife = 100, 
    isAlive = currentLife >= minimumLife ? "Alive" : "Dead"
  }) {
    (this.monsterName = monsterName),
      (this.minimumLife = minimumLife),
      (this.currentLife = currentLife),
      (this.isAlive = isAlive);
  }

  updateLife(lifeChangeAmount) {
    this.currentLife = this.currentLife - lifeChangeAmount < 0 ? 0 : this.currentLife - lifeChangeAmount;
    this.isAlive = this.currentLife >= this.minimumLife ? "Alive" : "Dead";
  }

  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

  randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
    let lifeChangeAmount = this.getRandomInteger(minimumLifeDrain, maximumLifeDrain)
      //Math.random() * (maximumLifeDrain - minimumLifeDrain) + minimumLifeDrain;
    let newLife = this.updateLife(lifeChangeAmount);
    return console.log(`${newLife}`);
  }
};
