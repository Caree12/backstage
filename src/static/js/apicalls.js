import { getUnixDateNow } from './utils';

export const getNumDiffCall = async (numObj) => {
	// console.log('getNumDiffCall called numObj', numObj);
	const num = numObj.number;
	let diffValue = numObj.value;
	
	if(!diffValue)	{
		let sumOfSqs, numSumSqd; 
	  // Sum of the squares
	  sumOfSqs = (num * (num + 1) * (2 * num + 1)) / 6; 
	  // Sum of numbers 
	  numSumSqd = (num * (num + 1)) / 2; 
	  // Square of numSumSqd 
	  numSumSqd = numSumSqd * numSumSqd; 
	  // Diff btw sumOfSqs and numSumSqd 
	  diffValue = Math.abs(sumOfSqs - numSumSqd); 
	}
  
	let jsonObj = await new Promise((resolve,reject)=>{
	  setTimeout(()=>{
	  	const currentTime = getUnixDateNow();
	  	const newLastDateTime = numObj.datetime ? numObj.datetime : currentTime;
			resolve(Object.assign({}, numObj, {datetime: currentTime, value: diffValue, last_datetime: newLastDateTime}))
		},300)
	})
	return jsonObj;
} 
