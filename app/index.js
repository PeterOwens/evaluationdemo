// Generated by CoffeeScript 1.10.0
(function() {
  var flattenArray;

  flattenArray = function(customerArray) {
    return customerArray.reduce((function(buildNewArrayString, arrayToProcess) {
      if (Array.isArray(arrayToProcess)) {
        return buildNewArrayString.concat(flattenArray(arrayToProcess));
      } else {
        return buildNewArrayString.concat([arrayToProcess]);
      }
    }), []);
  };

}).call(this);
