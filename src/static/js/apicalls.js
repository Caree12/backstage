import { getUnixDateNow } from './utils';

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
  
	let jsonObj = await new Promise((resolve,reject)=>{
	  setTimeout(()=>{
	  	const currentTime = getUnixDateNow();
	  	const newLastDateTime = numObj.datetime ? numObj.datetime : currentTime;
	  	console.log('value in Promise', diffValue)
			resolve(Object.assign({}, numObj, {datetime: currentTime, value: diffValue, last_datetime: newLastDateTime}))
		},300)
	})
	console.log('jsonObj after Promise', jsonObj)
	return jsonObj;
} 
