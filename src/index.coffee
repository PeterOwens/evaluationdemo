
# Flattening an array of arbitrarily nested arrays of integers 
# into a flat array of integers:

flattenArray = (customerArray) ->
  # Validate parameter
 if customerArray == null
    return 'Array cannot be null!' 
 if customerArray.isArray == false 
    return 'Input must be an array!'
 if customerArray == '' 
    return 'Input must be an array!'
  # Process array
  customerArray.reduce ((buildNewArrayString, arrayToProcess) ->
    if Array.isArray arrayToProcess
      buildNewArrayString.concat flattenArray arrayToProcess
    else
      buildNewArrayString.concat [arrayToProcess]), []
 



