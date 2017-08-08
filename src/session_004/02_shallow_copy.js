var Indian = {
  nation: 'India'
}

// var Doctor = {
//   career: 'Doctor'
// };

function shallowCopy(p) {
  var c = {};
  for(var i in p) {
    c[i] = p[i];
  }
  // c.uber = p;
  return c;
}



var Doctor = shallowCopy(Indian);
Doctor.career = 'Doctor';
console.log(Doctor.nation);


Indian.birthPlaces = ['New Delhi', 'Pune' ];
var Doctor1 = shallowCopy(Indian);
Doctor1.birthPlaces.push('Mumbai');

console.log(Doctor1.birthPlaces);
console.log(Indian.birthPlaces);
