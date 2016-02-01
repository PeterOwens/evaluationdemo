

	//Flattens an array of arbitrarily nested arrays of integers
	//into a flat array of integers

	var customerArray, flatCustomerArray, flattenArray;

	flattenArray = function(customerArray) {
	  return customerArray.reduce((function(buildNewArrayString, arrayToProcess) {
	    if (Array.isArray(arrayToProcess)) {
	      return buildNewArrayString.concat(flattenArray(arrayToProcess));
	    } else {
	      return buildNewArrayString.concat([arrayToProcess]);
	    }
	  }), []);
	};

	//Test a nested array
	describe('Array', function() {
	  describe('test for a nested array', function() {
	    it('Result should output to console', function() {
	     customerArray = [[1], 2, [[3, 4], 5], [[[]]], [[[6]]], 7, 8, []];
	  	 console.log('Result='+flattenArray(customerArray));
	    });
	  });
	});

	//Test an unnested array
	describe('Array', function() {
	  describe('test for an unnested array', function() {
	    it('Result should output to console', function() {
	     customerArray = [1, 2, 3, 4, 5];
	  	 console.log('Result='+flattenArray(customerArray));
	    });
	  });
	});

	//Test an empty array
	describe('Array', function() {
	  describe('test for an empty array', function() {
	    it('Result should output to console', function() {
	     customerArray = [];
	  	 console.log('Result='+flattenArray(customerArray));
	    });
	  });
	});

	//Test a two level nested array
	describe('Array', function() {
	  describe('test for a two level nested array', function() {
	    it('should output to console', function() {
	     customerArray = [1, 2, [ 3, 4, 5], 6, 7];
	  	 console.log('Result='+flattenArray(customerArray));
	    });
	  });
	});

	//Test a three level nested array
	describe('Array', function() {
	  describe('test for a three level nested array', function() {
	    it('Result should output to console', function() {
	     customerArray = [1, 2, [3, [4, 5]], 6, 7]
	  	 console.log('Result='+flattenArray(customerArray));

	    });
	  });
	});


 	