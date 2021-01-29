import React from 'react';
import DisplayNumber from './DisplayNumber';

const DisplayNumberRoot = (props) => {
    console.log(props)
    return (
      <div>
        <h1>DisplayNumber Root</h1>
        <DisplayNumber number={props.number}></DisplayNumber>
      </div>
    )
  }

export default DisplayNumberRoot;