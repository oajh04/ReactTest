import React from 'react';
import DndCard from './DndCard/DndCard';

const DndColumn = ({data}) => {


    return (
        <>
            <div style={{backgroundColor: "grey", margin: "20px"}}>
                {
                    data.map((i) => {
                        return (
                            <DndCard title={i.title} key={i.id} id={i.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default DndColumn;