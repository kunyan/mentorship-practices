var Mouse = function(name) {
  this.name = name;
  this.say = function() {
    console.log('My name is ' + name);
  };
}

var jerry = new Mouse('Jerry');



// console.log(typeof jerry);

// console.log(typeof Mouse);

// console.log(jerry.prototype);
console.log(Mouse.prototype);
// jerry.say();
