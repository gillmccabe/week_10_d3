var Rat = function( name ) {
  this.name = name;
}

Rat.prototype = {
  touchFood: function( food ) {
    food.poisonValue = true;
  }
}

module.exports = Rat;