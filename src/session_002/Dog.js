// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
var Dog = {
  name: 'Nana',
  say: function(){
    console.log('Hello, my name is ' + this.name);
  }
};
var dog = Object.create(Dog);
// dog.say();

// console.log(typeof Dog);
// console.log(typeof dog);
console.log(Dog);
console.log(dog.name);
dog.say();
