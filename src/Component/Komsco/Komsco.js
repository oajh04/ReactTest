import React, { useState } from 'react';
import axios from 'axios';

const Komsco = () => {
    const [ containerData, setContainerData ] = useState("");
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);
/*
    var dec = decodeURI("GuM5nYBlK9b4rPQ0UezjDXFZMBn0LXKVM5Jdul%2BYbeoN9dDXf1onpvUHxqqkwqMnS61aD%2Bf13JkrfE2htVTDpA%3D%3D");

    useEffect(()=>{
        const DataApi = async () => {
            try{
                setError(null)
                setContainerData(null);
                setLoading(true);

                const response = await axios.post(
                    `http://http://3.15.177.120:3000/report/files/2`
                );
                setContainerData(response.data);
                console.log(response.data)
                setLoading(false);
            }catch(e){
                setError(e);
            }
        };
        
        DataApi();
    }, [dec]);
    */

    const onchange = e => {
        setContainerData(e.target.files)
    }

    const onsubmit = () => {
        const formData = new FormData();
        formData.append('file', containerData);
        File(formData)
    }

    const File = async (formData) => {
        try{setError(null)
            setContainerData(null);
            setLoading(true);
            const response = await axios.post(
                `http://http://3.15.177.120:3000/report/files/2`, formData
            );
            setLoading(false);
        }catch(e){
            setError(e);
        }
    }

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>{error}</div>;
    console.log(111)

    return (
        <>
            
            <input type="file" name="reportFile" onChange={onchange}/> Report File
            <button onClick={onsubmit}>버튼</button>
            
        </>
    )
}

export default Komsco;

/*
{
                containerData.map((data) => {
                    return (
                        <div>
                            s
                        </div>
                    )
                })
            }

            */