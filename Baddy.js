var Baddy = function( name, strength, health ) {
  this.name = name;
  this.strength = strength;
  this.health = health;
}

Baddy.prototype = {
  laugh: function() {
    return "mwahahahahaha";
  },
  attack: function(hero) {
    if (hero.invisibility === false){
      hero.health -= this.strength;
    }
  },
  killerBlow: function(hero) {
    hero.health = 0;
  },
  stealHealth: function(hero) {
    if (hero.health > 10) {
      hero.health -= 10;
      this.health += 10;
    } else { 
      return "Not enough health left to steal"
    }
  }
}

module.exports = Baddy;