export const getNumDiff = (obj) => {
	console.log('getNumDiff called obj', obj);
	// TODO - do the calc and return a promise;
	const num = obj.num;
	let sumOfSqs = 0,  numSumSqd= 0, value = 0; 
  
    // Sum of the squares
    sumOfSqs = (num * (num + 1) * (2 * num + 1)) / 6; 
      
    // Sum of numbers 
    numSumSqd = (num * (num + 1)) / 2; 
  
    // Square of numSumSqd 
    numSumSqd = numSumSqd * numSumSqd; 
      
    // Differences between sumOfSqs and numSumSqd 
    value = abs(sumOfSqs - numSumSqd); 
    console.log('getNumDiff value', value)
    return value; 
  
} 