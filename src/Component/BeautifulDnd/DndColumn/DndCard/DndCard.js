import React from 'react';

const DndCard = ({title, id}) => {

    return (
        <>
            <div style={{padding: "10px", border: "1px solid black"}}>
                <div>{id} {title}</div>
            </div>
        </>
    )
}

export default DndCard;