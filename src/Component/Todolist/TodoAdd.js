import React, {useState} from 'react';
import * as S from './TodolistStyle';
import {useTodoDispatch, useTodoId} from './TodoModul';

const TodoAdd = () => {
    const [ todoText, setTodoText ] = useState("");

    const dispatch = useTodoDispatch();
    const nextId = useTodoId();

    const onSubmit = (e) => {
        e.preventDefault();
        if([todoText].includes("")){
            alert("입력하세요");
        }
        else{
            dispatch({
                type: 'ADD_TODO',
                todo: {
                    id: nextId.current,
                    text: todoText,
                    check: false
                }
            })
            setTodoText("");
            nextId.current += 1;
        }
    };
    
    const textData = (e) => {
        setTodoText(e.target.value);
    }

    return (
        <S.TodoFooterSub onSubmit={onSubmit}>
            <S.FooterInput placeholder="추가할 일정을 입력해주세요" onChange={textData}/>
            <S.FooterButton>추가하기</S.FooterButton>
        </S.TodoFooterSub>
    )
}

export default React.memo(TodoAdd);