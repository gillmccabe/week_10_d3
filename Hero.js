var Hero = function( name, health, favouriteFood, weapon ) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.weapon = weapon;
  this.invisibility = false;
}

Hero.prototype = {
  talk: function() {
    return "Hi, my name is " + this.name;
  },
  eat: function(food) {
    if ( food.name === this.favouriteFood ) {
      this.health += ( food.replenishmentValue * 1.5 )
      if ( food.poisonValue === true ) {
        this.health -= ( food.replenishmentValue * 1.5 );
      }
    } else if ( food.poisonValue === true ) {
      this.health -= food.replenishmentValue;
    } else {
      this.health += food.replenishmentValue;
    }
  },
  fly: function() {
    return "I am flying!!";
  },
  invisible: function(){
    this.invisibility = true;
  } , 
  attack: function(baddy) {
    baddy.health -= this.weapon.damage;
  }
}

module.exports = Hero;