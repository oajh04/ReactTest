import styled from 'styled-components';

export const CircleBox = styled.div`
    width: 500px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, auto));
`

export const Circle  = styled.div`
    width: 50px;
    height: 50px;
    text-align: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50%;
    display: grid;
`