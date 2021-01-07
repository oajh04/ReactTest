import React, { useCallback, useEffect, useState } from 'react';
import * as S from './scrollstyle';
import axios from 'axios';

const InfiniteScroll = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [ fitem, setFitem ] = useState(0);
    const [ item, setItem ] = useState(3)


    const fetchUsers = async () => {
            try {
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setUsers(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);
                const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos'
                );
                const cutUser = response.data.slice(fitem,item)
                console.log(cutUser)
                setUsers(users.concat(cutUser)); // 데이터는 response.data 안에 들어있습니다.
                console.log(users)
            } catch (e) {
                //setError(e);
            }
            setLoading(false);
        };

    const _infiniteScroll = useCallback(() => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
        
        if(scrollTop + clientHeight === scrollHeight) {
            setFitem(item)
            setItem(item + 3);
        }
    }, [item]);
    
    const event = () => {
        window.addEventListener('scroll', _infiniteScroll, true);
    }
        
    useEffect(() => {
        fetchUsers()
        event()
    }, [_infiniteScroll]);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!users) return null;

    return (
        <>
            {
                users.map(user => (
                    <>
                    <S.background key={user.id}>
                        <S.text>{user.title}</S.text>
                    </S.background>
                </>
            ))}
        </>
    );
}

export default InfiniteScroll;