import React from 'react';
import NumForm from './Forms/NumForm';
import ListResults from './../UI/ListResults';

import { getNumDiffCall } from './../../static/js/apicalls';

class MainPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	allResults: [],
      // allResults: [{
     //    datetime: 'Sat, 21 Mar 2020 20:55:31 GMT',
     //    value: 2640, 
     //    number: 10,
     //    occurrences: 1,
     //    last_datetime: 'Sat, 21 Mar 2020 20:55:31 GMT',
     //  }], //arr of response obj
      valueCache: {},
    	// valueCache: {10:{occurrences: 1, value: 2640}},
      value: '',
    };
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {}

  _getNumValue = (num) => {
    console.log('_getNumValue called num', num, 'state', this.state.value)
  	if(num !== this.state.value) {
  		this.setState({value: num});
  	}

    return this._getNumResult(Number(num));
  }

  _getNumResult = async (num) => {
    console.log("_getResult called state.value", this.state.value, 'num', num);
    const cache = Object.assign({}, this.state.valueCache);
    console.log("cache", cache, 'state', this.state.valueCache)
    //don't call if no user entered value
    if(!num) {return;}

    //already exists in cache so update occurence count and datetime value
    if(cache[num]) {
      console.log('cache already exits')
      cache[num].occurrences += 1;
      // const updatedCachedNumNoCall = this._updateCacheResult(this.state.allResults.find(result => result.number === num)[0]);

      // // update allResults with new occurrences count
      // this._updateResults(updatedCachedNumNoCall);      

      // //update datetime and last_datetime of each obj with same number
      // const updatedResults = allResults.map(result => {
      //   if(result.number === num) {
      //     result.last_datetime = 
      //     acc.push(result)
      //   }
      // }
    } else {
      console.log('add to cache')
      cache[num] = {};
      cache[num].number = num;
      cache[num].occurrences = 1;
      console.log('cache', cache, 'state.valueCache', this.state.valueCache)
    }

    let callData = await getNumDiffCall(cache[num])
    .then(res => {
      console.log('getNumDiffCall res', res)
      console.log('getNumDiffCall state', this.state)
      cache[num].value = res.value;
      
      this.setState(prevState => ({
        allResults: [res, ...prevState.allResults],
        valueCache: cache,
      }));
      return res;
    }).catch(err => {
      return 'Error in MainContainer: ' + err;
    });
    
    console.log("_getNumResult callData", callData);

    


  }

  _updateCacheResult = (result) => {
    console.log('_updateCacheResult called result')
    if(!result) {return;}
    const updatedResult = Object.assign({}, result);
    console.log('updatedResult ',updatedResult);
    

    console.log('updatedResult return',updatedResult)
    
    return updatedResult;
  }


  _updateResults = (res) => {
  	console.log("_updateResults called res", res);
  	// TODO - save to state a res and add newest to front of results arr (desc order)
  	
  	// don't update state if res is empty
  	if(!res || Object.keys(res).length === 0) return;

  	this.setState(prevState => ({
  		allResults: [res, ...prevState.allResults],
  	}));
  }
	
	render() {	
    const resultNum = this.state.allResults[0] && this.state.allResults[0].value ? this.state.allResults[0].value : false;
		
    return (
			<div className="c__app--container">	
				<NumForm 
					getNumValue={this._getNumValue}
          resultNum={resultNum}
				/>
		  	<ListResults results={this.state.allResults.length === 0 ? false : this.state.allResults} />
		  </div>
	 	);
	}
}

export default MainPage;