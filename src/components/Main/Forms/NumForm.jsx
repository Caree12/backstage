import React, { useState } from 'react';
import Loader from './../../UI/Loader';

export default function NumForm (props) {
  const [value, setValue] = useState('')

  function _handleChange (e) {
    setValue(e.target.value);
  }

  function _handleSubmit (e) {
    e.preventDefault();
    return props.getNumValue(value);
  }

  return (
    <div className="c__numForm--container">
      <form onSubmit={_handleSubmit} className="c__numForm--form--container">
        <label>
          Number: 
          <input type="number" min="1" max="100" step="1" value={value} onChange={_handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {props.fetchInProgress
        ? <Loader />
        : (props.resultNum || props.resultNum === 0) && value && (<div className="c__numForm--result">Difference: {props.resultNum}</div>)
      }
    </div>  
  );
}
