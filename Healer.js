var Healer = function( name, healingPower ) {
  this.name = name;
  this.healingPower = healingPower;
}

Healer.prototype = {
  heal: function(hero) {
    hero.health += this.healingPower;
  }
}

module.exports = Healer;