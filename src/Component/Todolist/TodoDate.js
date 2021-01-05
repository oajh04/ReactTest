import react from 'react';
import * as S from './TodolistStyle';

const TodoDate = () => {
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    return (
        <>
            {year}년 {month}월 {date}일 오늘 할 일은 뭘까??
        </>
    )
}

export default TodoDate;