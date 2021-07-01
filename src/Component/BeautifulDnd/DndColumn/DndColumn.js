import React from 'react';
import DndCard from './DndCard/DndCard';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';

const DndColumn = ({data, id, index, dropProvided}) => {

    const testData = [
        {
          id: "1",
          content: "Sometimes life is scary and dark",
          num: 1
        },
        {
          id: "2",
          content:
            "Sucking at something is the first step towards being sorta good at something.",
            num: 1
        },
        {
          id: "3",
          content: "You got to focus on what's real, man",
          num: 2
        },
        {
          id: "4",
          content: "Is that where creativity comes from? From sad biz?",
          num: 2
        },
        {
          id: "5",
          content: "Homies help homies. Always",
          num: 3
        },
        {
          id: "6",
          content: "Responsibility demands sacrifice",
          num: 3
        },
        {
          id: "7",
          content: "That's it! The answer was so simple, I was too smart to see it!",
          num: 3
        },
        {
          id: "8",
          content: "People make mistakes. It’s a part of growing up",
          num: 4
    
        },
        {
          id: "9",
          content: "Don't you always call sweatpants 'give up on life pants,' Jake?",
          num: 4
    
        },
        {
          id: "10",
          content: "I should not have drunk that much tea!",
          num: 4
    
        },
        {
          id: "11",
          content: "Please! I need the real you!",
          num: 5
    
        },
        {
          id: "12",
          content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
          num: 5
        }
      ];

    return (
        <>
          <div ref={dropProvided.innerRef} >
            <div>{index}</div>
            {
              testData.map((i, ind) => (
                i.num === index+1 ?
                <Draggable draggableId={i.id} key={i.id} index={ind}>
                  {(provided) => (
                    <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                      <DndCard title={i.title} id={i.id}/>
                    </div>
                  )}
                </Draggable>
                : null
              ))
            }
          </div>
        </>
    )
}

export default DndColumn;

// <Draggable draggableId={title} index={index}>
//         {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
//           <Container ref={provided.innerRef} {...provided.draggableProps}>
//             <Header isDragging={snapshot.isDragging}>
//               <Title
//                 isDragging={snapshot.isDragging}
//                 {...provided.dragHandleProps}
//                 aria-label={`${title} quote list`}
//               >
//                 {title}
//               </Title>
//             </Header>
//             <QuoteList
//               listId={title}
//               listType="QUOTE"
//               style={{
//                 backgroundColor: snapshot.isDragging ? colors.G50 : null,
//               }}
//               quotes={quotes}
//               internalScroll={this.props.isScrollable}
//               isCombineEnabled={Boolean(this.props.isCombineEnabled)}
//               useClone={Boolean(this.props.useClone)}
//             />
//           </Container>
//         )}
//       </Draggable>

// eslint-disable-next-line no-lone-blocks
{/* <DragDropContext >
              <Droppable droppableId={String(index)}>
                {
                  (provided) => (
                    <li {...provided.droppableProps} ref={provided.innerRef}>
                      <div style={{display: "block", width: "200px"}}>
                        <Draggable draggableId={id} index={Number(index)}>
                            {(provided) => (
                            <div style={{backgroundColor: "grey", margin: "20px"}} ref={provided.innerRef} {...provided.draggableProps}>
                                <div>{id}</div>
                                {
                                    quotes.map((i, indexc) => {
                                      
                                        return (
                                            i.num === index+1 ? <DndCard title={i.title} key={i.id} id={i.id}/> : null
                                        )
                                    })
                                }
                                {provided.placeholder}
                                </div>
                            )}
                        </Draggable>
                      </div>
                    </li>
                  )
                }
              
              </Droppable>
            </DragDropContext> */}