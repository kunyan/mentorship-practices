function Animal() {
  this.species = 'Animal';
}

function Cat(name, color) {
  Animal.apply(this, arguments); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
  this.name = name;
  this.color = color;
}

var tom = new Cat('Tom', 'yellow');
console.log(tom.species);
