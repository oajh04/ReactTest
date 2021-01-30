import React, { useState } from 'react';

const AddNumber = (props) => {
    const [ size, setSize ] = useState(1)

    return (
        <>
            <div>
                <h1>Add Number</h1>
                <input type="button" value="+" onClick={function(){
                    props.onClick(size);
                }.bind(this)}></input>
                <input type="text" value={size} onChange={function(e){
                    setSize(Number(e.target.value));
                }.bind(this)}></input>
            </div>
        </>
    )
  }

export default AddNumber;