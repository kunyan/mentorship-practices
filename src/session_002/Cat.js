// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
var cat = {
  name: 'Tom',
  say: function(){
    console.log('Hello, my name is ' + this.name);
  }
};

// cat.say();

console.log(typeof cat);
// console.log(cat.prototype);
