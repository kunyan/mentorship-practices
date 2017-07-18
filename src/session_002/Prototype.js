// Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

var Person = function () { };

var p1 = new Person();
console.log('p1.maxAge=' + p1.maxAge); // undefined

var p2 = new Person();
console.log('p2.maxAge=' + p2.maxAge); // undefined

Person.prototype.type = 'Person';
Person.prototype.maxAge = 100;

var p1 = new Person();
console.log('p1.maxAge=' + p1.maxAge); // 100


var p2 = new Person();
console.log('p2.maxAge=' + p2.maxAge); // 100


console.log(p1); // {}
console.log(p2); // {}
