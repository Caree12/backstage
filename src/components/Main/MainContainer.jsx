import React from 'react';
import NumForm from './Forms/NumForm';
import ListResults from './../UI/ListResults';
import { getNumDiffCall } from './../../static/js/apicalls';

class MainPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	allResults: [],
      valueCache: {},
      value: '',
    };
  }

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

    //already exists in cache so update occurence count
    if(cache[num]) {
      console.log('cache already exits allResults', this.state.allResults)
      cache[num].occurrences += 1;
      cache[num].datetime = this.state.allResults.find(result => result.number === Number(num)).datetime;
    } else {
      console.log('add to cache')
      cache[num] = {};
      cache[num].number = num;
      cache[num].occurrences = 1;
      console.log('cache', cache, 'state.valueCache', this.state.valueCache)
    }

    let callData = await getNumDiffCall(cache[num])
    .then(res => {
      this.setState(prevState => ({
        allResults: [res, ...prevState.allResults],
        valueCache: cache,
      }));
      return res;
    }).catch(err => {
      return 'Error in MainContainer: ' + err;
    });
  }

	render() {	
    const resultNum = this.state.allResults[0] && this.state.allResults[0].value ? this.state.allResults[0].value : false;
		
    return (
			<div className="c__app--container">	
				<NumForm 
					getNumValue={this._getNumValue}
          resultNum={resultNum}
				/>
		  	<ListResults 
          results={this.state.allResults.length === 0 ? false : this.state.allResults} 
          resultKeys={['datetime', 'number', 'value', 'occurrences', 'last_datetime']}
        />
		  </div>
	 	);
	}
}

export default MainPage;