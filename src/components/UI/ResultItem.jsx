import React from 'react';
import {getDateFromUnixTS} from './../../static/js/utils';

export default function ResultItem (props) {
  return (
    <div className="c__list--results--item">
      {props.resultKeys.map((key, i) => {
        if(props.result[key] !== undefined) {
          return (
            <div key={`c__result-key-${i}`} className="c__list--results--item--data--point">
              <strong>{key.toUpperCase().replace(/_/g, ' ')}</strong>: {key.includes('datetime') ? getDateFromUnixTS(props.result[key]) : props.result[key]}
            </div>
          )
        } else {return null;}
      })}
    </div>
  );
}
