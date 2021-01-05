import React, { useState } from 'react';
import * as S from './TodolistStyle';
import { useTodoDispatch } from './TodoModul';

const TodoModify = ({ id }) => {
    const [ modifyText, setModifyText ] = useState("");

    const dispatch = useTodoDispatch();

    const onChange = (e) => setModifyText(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if([modifyText].includes("")){
            alert("수정할 내용을 입력하세요");
        }
        else{
            dispatch({type: 'CHANGE_TODO', id, modifyText})
        }
    }

    console.log(modifyText)

    return (
        <S.ModifyInput key={id}>
            <S.ModifyBox onSubmit={onSubmit}>
                <input onChange={onChange} placeholder="수정할 내용을 입력하세요" />
                <button>수정하기</button>
            </S.ModifyBox>
        </S.ModifyInput>
    )

}

export default TodoModify;