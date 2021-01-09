import React from 'react';

const Array = () => {

    const testarray = [1,2,3,4,5,8,10,20,215,123,12 ]

    function Custom() {}

    Custom.prototype.CSmap = (e) => {
        for(let i = 0; i < e.length; i++ ){
            console.log(e[i])
        }
    }

    Custom.prototype.CSconcat = (e,data) => {
        e[e.length] = data;
        console.log(testarray)
    }

    Custom.prototype.CSfilter = (e, s ,f) => {
        for(let i=0; i < e.length; i++){
            switch(s){
                case '<': if(e[i] < f ){ console.log(e[i]) }
                break;
                case '<=': if(e[i] <= f ){ console.log(e[i]) }
                break;
                case '>': if(e[i] > f ){ console.log(e[i]) }
                break;
                case '>=': if(e[i] >= f ){ console.log(e[i]) }
                break;
                case '===': if(e[i] === f ){ console.log(e[i]) }
                break;
                case '==': if(e[i] == f ){ console.log(e[i]) }
                break;
                case '!==': if(e[i] !== f ){ console.log(e[i]) }
                break;
                case '!=': if(e[i] != f ){ console.log(e[i]) }
                break;
            }
        }
    }

    let cs = new Custom()

    return (
        <>
        {
            cs.CSfilter(testarray, '===' ,20)
        }
        </>
    )

}

export default Array;