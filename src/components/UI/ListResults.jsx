import React from 'react';
import ResultItem from './ResultItem';

export default function ListResults (props) {

  if(!props.results || props.results.length === 0) {return null;}
    // return null;
  return (
    <div className="c__list--results--container">
      <div className="c__list--results--header"> Call History Results (descending order)</div>
      {props.results.map((result, i) => 
      	<ResultItem 
      		result={result}
      		key={`response-result-${i}`}
      		resultKeys={props.resultKeys}
      	/>
      )}
    </div>
  );
}
