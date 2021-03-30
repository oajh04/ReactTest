import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { LOAD_DATA } from './GraphQuery';
import { useQuery } from "react-apollo"

const GraphQl = () => {
    const [ GraghData, setGraghData ] = useState("")


    const { error, loading, data} = useQuery(LOAD_DATA)

    if (loading) return <p>로딩 중...</p>
    if (error) return <p>오류(</p>
    

    return (
        <>
            {
                data.teams.map((e)=>{
                    return <li key={e.id}>{e.office}</li>
                })
            }
        </>
    )
}

export default GraphQl;