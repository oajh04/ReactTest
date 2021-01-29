import React, { useState } from 'react'
import styled from 'styled-components'

export const UseLang = styled.div`
    width: 100%;
    height: 100%;
    margin-top: .8rem;
    display: flex;
    background: #F8F8F8;
    border: 1px solid #F8F8F8;
    padding: .8rem .8rem;
    input {
        width: 100%;
        border: 1px solid #F8F8F8;
        background: #F8F8F8;
        outline: none;
        font-family: BBTreeGL;
        font-weight: normal;
        font-size: 14px;
        text-align: left;
    }
`;

export const colors = ['navajowhite','lavender','mistyrose','lightgreen','lavenderblush','honeydew','oldlace','ivory']

export const Tag = styled.div`
    border: 1px solid;
    white-space: nowrap;
    color: darkslategray;
    background-color: ${({ index }) => colors[index % colors.length]};
    border: 1px solid ${({ index }) => colors[index % colors.length]};
    border-radius: 5px;
    padding: .1rem .3rem;
    font-family: BBTreeGL;
    font-size: 14px;
    margin-right: .4rem;
    &:hover {
        cursor: pointer;
    }
`;

const Enter = () => {
    const [ tags, setTags ] = useState([]);

    const onLanguageChange = (e) => {
        if ( (e.key === 'Enter' || e.key === ',') && e.target.value.trim()) {
            const newTags = [...tags];
            newTags[tags.length] = e.target.value;
            setTags(newTags)
            e.target.value = ''
        }
    }
    
    const onLanguageClick = (index) => {
        const delTags = [...tags];
        delTags.splice(index, 1);
        setTags(delTags);
    }

    return(
        <>
        <UseLang>
            {
                console.log(tags),
                tags.map((tag, i) => {
                    return <Tag onClick={() => onLanguageClick(i)} index={i}>{tag}</Tag>
                }) 
            }
            <input type="text" placeholder="개발에 사용한 언어들을 입력해주세요" onKeyPress={onLanguageChange} />
        </UseLang>
        </>
    )
}

export default Enter;