import React from 'react';

export default function ListResults (props) {

  if(!props.results || props.results.length === 0) return 'no results yet'
    // return null;
  return (
    <div className="c_list-results-container">
      List Results
      {/*props.results.map((item, i) => {


      })*/}
    </div>
  );
}
