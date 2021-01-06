import React, {useState} from 'react';
import { MdDone, MdDelete,MdCreate } from 'react-icons/md';
import * as S from './TodolistStyle';
import {useTodoDispatch} from './TodoModul';
import TodoModify from './TodoModify';

const TodoContainer = ({id, text, check}) => {
    const [ modifyInput, setModifyInput ] = useState(false);

    const dispatch = useTodoDispatch();

    const onToggle = () => dispatch({type: 'CHECK_TODO', id});
    const onDelete = () => dispatch({type: 'DELETE_TODO', id})

    const onModify = () => {
        setModifyInput(!modifyInput)
    }

    return (
        <S.Container key={id}>
            <S.ContainerBox>
                <S.Check onClick={onToggle} check={check}>{check && <MdDone/>}</S.Check>
                <S.Content check={check}>{text}</S.Content>
                <S.Modify onClick={onModify}><MdCreate/></S.Modify>
                <S.Remove onClick={onDelete}><MdDelete/></S.Remove>
            </S.ContainerBox>

            {
                modifyInput && 
                <TodoModify key={id} id={id} check={check}/>
            }
        </S.Container>
    )
}

export default React.memo(TodoContainer);
/* 불필요한 리렌더링 방지 */