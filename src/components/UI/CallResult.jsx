import React, { useState, useEffect } from 'react';
import { getDiff } from './../../static/js/apicalls';

export default function CallResult (props) {
  const [res, setRes] = useState({})

  // useEffect(() => {
  //   if(!props.value) { return;}

  //   const res = getDiff();
  // }, {});
  // function _handleChange (e) {
  //   console.log('_handleChange called val', e.target.value)
  //   setValue(e.target.value);
  // }

  // function _handleSubmit (e) {
  //   console.log('_handleSubmit called val', value)
  //   e.preventDefault();
  //   // return this.props.getDiff(this.state.value);
  // }

  return (
    <div>
      CallResult
    </div>
  );
}
