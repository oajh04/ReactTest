import React from 'react';
import * as S from './TodolistStyle';
import TodoContent from './TodoContent';
import TodoAdd from './TodoAdd';
import TodoDate from './TodoDate.js'
import { TodoProvider } from './TodoModul';

const Todolist = () => {
    
    return(
        <TodoProvider>
            <S.TodoListBox>
                <S.TodoList>
                    {/* TodoList 날짜, 할일 표시 */}
                    <S.TodoHeader>
                        <TodoDate/>
                    </S.TodoHeader>

                    {/* TodoList 할일 리스트*/}
                    <S.TodoBody>
                        <TodoContent/>
                    </S.TodoBody>

                    {/* TodoList 할일 등록 */}
                    <S.TodoFooter>
                        <TodoAdd/>
                    </S.TodoFooter>
                </S.TodoList>
            </S.TodoListBox>
        </TodoProvider>
    )
}

export default Todolist;