function Animal() {
  this.species = 'Animal';
}

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat; // ?

var tom = new Cat('Tom', 'yellow');
console.log(tom.species);
