
# Flattening an array of arbitrarily nested arrays of integers into a flat array of integers:
flattenArray = (customerArray) ->
  customerArray.reduce ((buildNewArrayString, arrayToProcess) ->
    if Array.isArray arrayToProcess
      buildNewArrayString.concat flattenArray arrayToProcess
    else
      buildNewArrayString.concat [arrayToProcess]), []
 



