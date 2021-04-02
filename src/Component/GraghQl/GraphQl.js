import React, { useState } from 'react';
import { LOAD_DATA, POST_DATA } from './GraphQuery';

const GraphQl = () => {
    const [ GraghData, setGraghData ] = useState("")
    const { error, loading, data} = useQuery(LOAD_DATA)
    const [UserMutation, { data }] = useMutation(POST_DATA);

    const onButton = () => {
        
    }

    if (loading) return <p>로딩 중...</p>
    if (error) return <p>오류</p>


    return (
        <>
            {
                data.teams.map((e)=>{
                    return <li key={e.id}>{e.office}</li>
                })
            }
            <div onClick={onButton}>button</div>
        </>
    )
}

export default GraphQl;