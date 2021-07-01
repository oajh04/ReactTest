import React from 'react';
import Card from './Card'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const column = ({columns}) => {

    return (
        <>
            
          {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "lightgrey",
                                padding: 4,
                                width: 250,
                                minHeight: 500
                            }}
                            >
                            <Card column={column}/>
                            {provided.placeholder}
                        </div>
                        );
                    }}
                </Droppable>
              </div>
            </div>
          );
        })}
        </>
    )
}

export default column;