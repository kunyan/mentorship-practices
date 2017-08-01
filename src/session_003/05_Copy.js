function Animal() {}
Animal.prototype.species = 'Animal';

function Cat(name, color) {
  this.name = name;
  this.color = color;
}


function extend(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;

  for (var i in p) {
    c[i] = p[i];
  }
  // c.uber = p;
}

　
extend(Cat, Animal);

var tom = new Cat('Tom', 'yellow');
console.log(tom.species);
