import React from 'react';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import DndCard from './DndColumn/DndCard/DndCard';
import DndColumn from './DndColumn/DndColumn';

const testDataSet = [
    {
        title: "1",
        id: "1",
    },
    {
        title: "2",
        id: "2",
    },
    {
        title: "3",
        id: "3",
    },
    {
        title: "4",
        id: "4",
    },
    {
        title: "5",
        id: "5",
    },
]

const BeautifulDnd = () => {
    const [ data, setData] = useState(testDataSet)

    const handleChange = (result) => {
        if (!result.destination) return;
        console.log(result);
        const items = [...data];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setData(items);
    };

    return (
        <>
            <DragDropContext onDragEnd={handleChange}>
                <Droppable droppableId="testColumn" direction="horizontal">
                        
                        {(provided) => (
                            <div style={{display: 'flex'}} className="testColumn" {...provided.droppableProps} ref={provided.innerRef}>
                                {data.map(({ id, title }, index) => (
                                    <Draggable draggableId={id} index={index} key={id}>
                                    {
                                        (provided) => (
                                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <DndColumn title={title} id={id} index={index} dropProvided={provided}/>
                                            </div>
                                        )
                                    }
                                    </Draggable>
                                ))
                                }
                            {provided.placeholder}
                            </div>
                        )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

export default BeautifulDnd;