function addingNNumbersOnly() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number')
      throw (
        'Function accept numbers only you passed ' + typeof arguments[i] + ''
      );
    else sum += Number(arguments[i]);
  }
  if (arguments.length) {
    return sum;
  } else throw 'Function accept at least one number ';
}

console.log(
  'addingNNumbersOnly(1, 2, 3, 4, 5): ',
  addingNNumbersOnly(1, 2, 3, 4, 5),
); // No Error
console.log('addingNNumbersOnly(1, 2, 3): ', addingNNumbersOnly(1, 2, 3)); // No Error

// addingNNumbersOnly(); // Error
// addingNNumbersOnly(1, 2, 'hi'); // Error
// addingNNumbersOnly(1, 2, true); // Error
// addingNNumbersOnly([1, 2, 3]); // Error
// addingNNumbersOnly({ fName: 'mohamed' }); // Error
