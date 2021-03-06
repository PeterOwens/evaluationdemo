// Generated by CoffeeScript 1.10.0
(function() {
  var flattenArray;

  flattenArray = function(customerArray) {
    if (customerArray === null) {
      return 'Array cannot be null!';
    }
    if (customerArray.isArray === false) {
      return 'Input must be an array!';
    }
    if (customerArray === '') {
      return 'Input must be an array!';
    }
    return customerArray.reduce((function(buildNewArrayString, arrayToProcess) {
      if (Array.isArray(arrayToProcess)) {
        return buildNewArrayString.concat(flattenArray(arrayToProcess));
      } else {
        return buildNewArrayString.concat([arrayToProcess]);
      }
    }), []);
  };

}).call(this);
