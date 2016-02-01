# Flattening an array of arbitrarily nested arrays of integers into a flat array of integers:
flattenArray = (customerArray) ->
  customerArray.reduce ((buildNewArrayString, arrayToProcess) ->
    if Array.isArray arrayToProcess
      buildNewArrayString.concat flattenArray arrayToProcess
    else
      buildNewArrayString.concat [arrayToProcess]), []
 

# Running a test:
customerArray = [[1], 2, [[3,4], 5], [[[]]], [[[6]]], 7, 8, []]
flatCustomerArray = flattenArray customerArray
console.log flatCustomerArray
alert flatCustomerArray
