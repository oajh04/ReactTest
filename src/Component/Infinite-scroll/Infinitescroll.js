import React, { useCallback, useEffect, useState } from 'react';
import * as S from './scrollstyle';
import axios from 'axios';
import Asd from '../Komsco/Asd';

const InfiniteScroll = () => {

    const [data, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    const [ fatch , setFatch ] = useState(false);

    const [ item, setItem ] = useState(0)


    const fetchDates = async () => {
        setLoading(true);
            try {
                const response = await axios.get(
                'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=5634f5a486c449f281e035aa41fdeb91'
                );
                const cutdata = response.data.articles.slice(item, item+3);
                setDatas(cutdata);
            } catch (e) {
                console.log(e);
            }
        setLoading(false);
    };

    const infiniteScroll = useCallback(() => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
    
        if (scrollTop + clientHeight === scrollHeight) {
            fetchDatesMore();
        }
      });
        
    useEffect(() => {
        fetchDates()
        
        window.addEventListener('scroll', infiniteScroll, true);

    }, []);

    const fetchDatesMore = async () => {
        setFatch(true);
        
        try {
            const response = await axios.get(
            'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=5634f5a486c449f281e035aa41fdeb91'
            );
            const cutdata = response.data.articles.slice(item, item+3);
            setDatas((datas) => datas.concat(cutdata));
            
        } catch (e) {
            console.log(e)
        }
        setFatch(false);
        setItem(item + 3);
    };

    if (loading) return <div>로딩중..</div>;
    if (!data) return null;

    return (
        <>
            <div>
            {
                data.map((news) => (
                    <>
                        <S.background key={news.url}>
                            <S.text>{news.title}</S.text>
                        </S.background>
                    </>
                ))
            }
            </div>
        </>
    );
}

export default InfiniteScroll;