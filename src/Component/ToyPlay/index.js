import React, { useState } from 'react';
import * as S from './styles';

const MainToy = () => {
    const [ number, setNumber ] = useState([]);
    const [ total, setTotal ] = useState(5);
    const [ max, setMax ] = useState(0);
    const [ min, setMin ] = useState(0);

    const useRandom = (numMax, numMin) => {
        return Math.floor(Math.random() * (numMax - numMin + 1) + numMin)
    }

    const onPlus = () => {
        setTotal(total+1)
    }
    const onMius = () => {
        setTotal(total-1)
    }

    const onMax = (e) => {
        setMax(e.target.value);
    }
    const onMin = (e) => {
        setMin(e.target.value);
    }

    const onRandom = () => {
        for(let i=0; i<total; i++) {
            const randomNumber = useRandom(max, min)
            setNumber(num => [...num, randomNumber])
            
        }
        console.log(number);
    }


    return (
        <>
            <div>{total}</div>
            <div>랜덤 갯수</div>
            <button onClick={onPlus}>+</button>
            <button onClick={onMius}>-</button>
            <input onChange={onMax}/>
            <div>최댓값</div>
            <input onChange={onMin}/>
            <div>최솟값</div>
            <div onClick={onRandom}>start</div>
            <S.CircleBox>
            {
                Array(total).fill(-1).map((_, index)=> (
                    <S.Circle key={index}>{number && number[index]}</S.Circle>
                ))
            }
            </S.CircleBox>
        </>
    )
}

export default MainToy;