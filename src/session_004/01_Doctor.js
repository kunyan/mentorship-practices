var Indian = {
  nation: 'India'
}

// var Doctor = {
//   career: 'Doctor'
// };


function object(o) {　　　　
  function F() {}　　　　
  F.prototype = o;　　　　
  return new F();　　
}


var Doctor = object(Indian);
Doctor.career = 'Doctor';

console.log(Doctor.nation);
