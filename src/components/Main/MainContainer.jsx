import React from 'react';
import NumForm from './Forms/NumForm';
import ListResults from './../UI/ListResults';
import { getNumDiffCall } from './../../static/js/apicalls';

class MainPage extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	allResults: [],
      fetchInProgress: false,
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

    this.setState({fetchInProgress: true})
    
    //check if number already cache 
    if(cache[num]) {
      //in cache so update occurence count and datetime
      console.log('cache already exits')
      cache[num].occurrences += 1;
      cache[num].datetime = this.state.allResults.find(result => result.number === Number(num)).datetime;
    } else {
      console.log('add to cache')
      cache[num] = {};
      cache[num].number = num;
      cache[num].occurrences = 1;
      // console.log('cache', cache, 'state.valueCache', this.state.valueCache)
    }

    await getNumDiffCall(cache[num])
    .then(res => {
      this.setState(prevState => ({
        allResults: [res, ...prevState.allResults],
        fetchInProgress: false,
        valueCache: cache,
      }));
      return res;
    }).catch(err => {
      this.setState({fetchInProgress: false})
      return 'Error in MainContainer: ' + err;
    });
  }

	render() {	
    const resultNum = this.state.allResults[0] && (this.state.allResults[0].value || this.state.allResults[0].value === 0) ? this.state.allResults[0].value : false;
		
    return (
			<div className="c__app--container">	
				<NumForm 
          fetchInProgress={this.state.fetchInProgress}
					getNumValue={this._getNumValue}
          parentValue={this.state.value}
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