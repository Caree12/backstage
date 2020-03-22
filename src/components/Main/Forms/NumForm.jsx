import React, { useState } from 'react';

export default function NumForm (props) {
  const [value, setValue] = useState('')

  function _handleChange (e) {
    // console.log('_handleChange called val', e.target.value)
    setValue(e.target.value);
  }

  function _handleSubmit (e) {
    // console.log('_handleSubmit called val', value)
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

      {props.resultNum &&
        <div className="c__numForm--result">Difference: {props.resultNum}</div>
      }
    </div>  
    );
}
