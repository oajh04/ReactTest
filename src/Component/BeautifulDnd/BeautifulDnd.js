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

        console.log(data[result.destination.index-1])
    };

    return (
        <>
            <DragDropContext onDragEnd={handleChange}>
                <Droppable droppableId="testColumn" >
                        {(provided, snapshot) => (
                            <li className="testColumn" {...provided.droppableProps} ref={provided.innerRef}>
                                <div style={{display: "flex"}}>
                                {data.map(({ id, title }, index) => (
                                    <Draggable key={id} draggableId={id} index={index} >
                                        {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <DndCard title={title} id={id}/>
                                        </li>
                                        )}
                                    </Draggable>
                                ))}
                                </div>
                            {provided.placeholder}
                            </li>
                        )}
                    </Droppable>
            </DragDropContext>

        </>
    )
}

export default BeautifulDnd;