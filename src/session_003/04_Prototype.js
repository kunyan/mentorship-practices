function Animal() {}
Animal.prototype.species = 'Animal';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

var F = function(){};

F.prototype = Animal.prototype;
Cat.prototype = new F();
Cat.prototype.constructor = Cat; // ?

var tom = new Cat('Tom', 'yellow');
console.log(tom.species);

// console.log(Animal.prototype.constructor);


function extend(Child, Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  // Child.uber = Parent.prototype;
}

// extend(Cat,Animal);
// var tom = new Cat('Tom', 'yellow');
// console.log(tom.species);
