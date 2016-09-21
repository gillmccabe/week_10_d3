var assert = require( "assert" );
var Hero = require( "../Hero" );
var Food = require( "../Food" );
var Rat = require( "../Rat" );
var Baddy = require( "../Baddy" );
var Healer = require( "../Healer" );
var Weapon = require( "../Weapon");

describe( "Hero", function() {

  it( "should have a name", function() {
    var hero1 = new Hero( "Jim" );
    assert.equal( "Jim", hero1.name )
  } )

  it( "should have health", function() {
    var hero1 = new Hero ( "Jim", 100 );
    assert.equal( "100", hero1.health )
  })

  it( "should have favourite food", function() {
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    assert.equal( "black pudding", hero1.favouriteFood )
  })

  it( "can talk", function() {
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    assert.equal( "Hi, my name is Jim", hero1.talk() )
  })

  it( "can eat food", function() {
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    var food1 = new Food ( "beans", 10 );
    hero1.eat(food1);
    assert.equal( 110, hero1.health )
  })

  it( "can eat favourite food", function() {
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    var food1 = new Food ( "black pudding", 10 );
    hero1.eat(food1);
    assert.equal( 115, hero1.health )
  })

  it( "can eat poisonous food", function() {
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    var food1 = new Food ( "sandwiches", 20 );
    var rat1 = new Rat( "Dave" );
    rat1.touchFood(food1);
    hero1.eat(food1);
    assert.equal(80, hero1.health )
  })

  it( "can eat poisonous favourite food", function() {
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    var food1 = new Food ( "black pudding", 10 );
    var rat1 = new Rat( "Dave" );
    rat1.touchFood(food1);
    hero1.eat(food1);
    assert.equal(100, hero1.health)
  })

  it( "can attack baddy", function() {
    var weapon1 = new Weapon ( "axe", 20 )
    var hero1 = new Hero ( "Jim", 100, "black pudding", weapon1 );
    var baddy1 = new Baddy ( "Malcolm", 30, 100 );
    hero1.attack(baddy1);
    assert.equal( 80, baddy1.health )
  })

  it( "starts off visible", function() {
    var weapon1 = new Weapon ( "axe", 20 )
    var hero1 = new Hero ( "Jim", 100, "black pudding", weapon1 );
    assert.equal( false, hero1.invisibility )
  })

  it( "can become invisible", function() {
    var weapon1 = new Weapon ( "axe", 20 )
    var hero1 = new Hero ( "Jim", 100, "black pudding", weapon1 );
    hero1.invisible();
    assert.equal( true, hero1.invisibility )
  })

})

describe( "Food", function() {

  it( "should have a name", function() {
    var food1 = new Food( "beans" );
    assert.equal( "beans", food1.name )
  } )

  it( "should have a replenishment value", function() {
    var food1 = new Food( "beans", 10 );
    assert.equal( 10, food1.replenishmentValue )
  })

})


describe( "Rat", function() {

  it( "should have a name", function() {
    var rat1 = new Rat( "Dave" );
    assert.equal( "Dave", rat1.name )
  })

  it( "can touch food", function() {
    var rat1 = new Rat( "Dave" );
    var food1 = new Food( "beans", 10 );
    rat1.touchFood(food1);
    assert.equal( true, food1.poisonValue )
  })

})


describe( "Baddy", function() {

  it( "should have a name", function() {
    var baddy1 = new Baddy( "Malcolm" );
    assert.equal( "Malcolm", baddy1.name )
  })

  it( "should have a strength", function() {
    var baddy1 = new Baddy( "Malcolm", 30 );
    assert.equal( 30, baddy1.strength )
  })

  it( "has evil laugh", function() {
    var baddy1 = new Baddy( "Malcolm", 30 );
    assert.equal( "mwahahahahaha", baddy1.laugh() )
  })

  it( "can attack hero", function() {
    var baddy1 = new Baddy( "Malcolm", 30 );
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    baddy1.attack(hero1);
    assert.equal( 70, hero1.health )
    })

  it( "cannot attack hero if invisible", function () {
    var weapon1 = new Weapon ( "axe", 20 )
    var hero1 = new Hero ( "Jim", 100, "black pudding", weapon1 );
    var baddy1 = new Baddy( "Malcolm", 30, 20 );
    hero1.invisible();
    baddy1.attack(hero1);
    assert.equal( 100, hero1.health )
  })

  it( "can deliver killer blow", function() {
    var baddy1 = new Baddy( "Malcolm", 30 );
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    baddy1.killerBlow(hero1);
    assert.equal( 0, hero1.health )
  })

  it( "can steal health", function() {
    var baddy1 = new Baddy( "Malcolm", 30, 20 );
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    baddy1.stealHealth(hero1);
    assert.equal( 30, baddy1.health );
    assert.equal( 90, hero1.health );
  })

  it( "can get message if not enough health to steal", function() {
    var baddy1 = new Baddy( "Malcolm", 30, 20 );
    var hero1 = new Hero ( "Jim", 0, "black pudding" );
    baddy1.stealHealth(hero1);
    assert.equal( "Not enough health left to steal", baddy1.stealHealth(hero1))
  })


})


describe( "Healer", function() {

  it( "should have a name", function() {
    var healer1 = new Healer( "Zelda", 20 );
    assert.equal( "Zelda", healer1.name )
  })

  it( "can heal", function() {
    var healer1 = new Healer( "Zelda", 20 );
    var hero1 = new Hero ( "Jim", 100, "black pudding" );
    healer1.heal(hero1);
    assert.equal( 120, hero1.health )
  })

})


describe( "Weapon", function() {

  it("should have a name", function() {
    var weapon1 = new Weapon ( "axe", 20 );
    assert.equal( "axe", weapon1.name )
  })

  it("should have a damage value", function() {
    var weapon1 = new Weapon ( "axe", 20 );
    assert.equal( 20, weapon1.damage )
  })

})