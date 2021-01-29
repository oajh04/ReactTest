import React from 'react';
import AddNumber from './AddNumber';

const AddNumberRoot = () => {
    return (
      <div>
        <h1>Add Number Root</h1>
        <AddNumber onClick={function(size){
            this.props.onClick(size);
        }.bind(this)}></AddNumber>
      </div>
    )
  }

export default AddNumberRoot;