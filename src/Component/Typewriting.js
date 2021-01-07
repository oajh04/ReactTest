import React, {useState} from 'react';

const Typewriting = () => {
    const [ code, setCode ] = useState("");

    const ontext = (e) => {
        setCode(e.target.value);
        console.log(code);
    }

    const asd = () => {
        
    }
    
    return(
        <>
            <div>
                <input type="text" onChange={ontext} onload={asd}/>
            </div>
        </>   
    )
}

export default Typewriting;