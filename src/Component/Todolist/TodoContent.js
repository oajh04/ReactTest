import React from 'react';
import TodoContainer from './TodoContainer';
import { useTodoState } from './TodoModul';

const TodoContent = () => {
    const todos = useTodoState();
    console.log(todos);

    return(
        <>
            {
                todos.map((data) => {
                    return (
                        <>
                            <TodoContainer key={data.id} id={data.id} text={data.text} check={data.check}/>
                        </>
                    )
                })
            }
            
        </>
    )
}

export default TodoContent;