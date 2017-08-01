function Animal() {}
Animal.prototype.species = 'Animal';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat; // ?

var tom = new Cat('Tom', 'yellow');
console.log(tom.species);

// console.log(Animal.prototype.constructor);
