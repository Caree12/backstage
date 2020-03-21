export const getNumDiffCall = async (numObj) => {
	console.log('getNumDiffCall called numObj', numObj);
	const num = numObj.number;
	let diffValue = numObj.value;
	
	if(!diffValue)	{
		console.log('set value')
		let sumOfSqs, numSumSqd; 
	  // Sum of the squares
	  sumOfSqs = (num * (num + 1) * (2 * num + 1)) / 6; 
	  // Sum of numbers 
	  numSumSqd = (num * (num + 1)) / 2; 
	  // Square of numSumSqd 
	  numSumSqd = numSumSqd * numSumSqd; 
	  // Diff btw sumOfSqs and numSumSqd 
	  diffValue = Math.abs(sumOfSqs - numSumSqd); 
	  // console.log('getNumDiffCall diffValue', diffValue)
	}
  
	  // console.log('getNumDiffCall diffValue outside', diffValue)

  //unix Math.round((new Date()).getTime() / 1000);
  //user friendly new Date().toUTCString;
  //user friendly new Date().toLocaleDateString() + ' at ' + new Date().toLocaleTimeString();

	let jsonObj = await new Promise((resolve,reject)=>{
	  setTimeout(()=>{
	  	// const newLastDateTime = numObj.last_datetime ? 
	  	console.log('value in Promise', diffValue)
			resolve(Object.assign(numObj, {datetime: Math.round((new Date()).getTime() / 1000), value: diffValue}))
		},3000)
	})
	console.log('jsonObj after Promise', jsonObj)
	return jsonObj;
} 


	// {
	// 	datetime //current date/time of this request,
	// 	value // solution,
	// 	number // input number
	// 	occurrences  // the number of times input has been requested
	// 	last_datetime // last date/time of request for this input
	// }

	// 
