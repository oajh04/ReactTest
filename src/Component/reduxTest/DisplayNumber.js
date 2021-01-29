import React from 'react';

const DisplayNumber = (props) => {
    console.log(props)

    return (
        <>
            <div>
                <h1>DisplayNumber</h1>
                <input type="text" value={props.number} readOnly></input>
            </div>
        </>
    )
  }

export default DisplayNumber;