var Indian = {
  nation: 'India'
}


function deepCopy(p, c) {
    var c = c || {};
    for(var i in p) {
        if(typeof p[i] === 'object') {
            c[i] = (p[i].constructor === Array) ? [] : {};
            deepCopy(p[i], c[i]);
        } else {
            c[i] = p[i];
        }
    }

    return c;
}

// var Doctor = deepCopy(Indian, null);

Indian.birthPlaces = ['New Delhi', 'Pune' ];
var Doctor1 = deepCopy(Indian);
Doctor1.birthPlaces.push('Mumbai');

console.log(Doctor1.birthPlaces);
console.log(Indian.birthPlaces);


lodash
  .clone()
  .cloneDeep()
jQuery
