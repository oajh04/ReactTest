import React from 'react';

const Array = () => {

    const testarray = [1,2,3,4,5,8,10,20,215,123,12 ]
    const addarray = [1,5,2,3]

    // function Custom() {}

    // Custom.prototype.CSmap = (e) => {
    //     for(let i = 0; i < e.length; i++ ){
    //         console.log(e[i])
    //     }
    // }

    // Custom.prototype.CSconcat = (e,data) => {
    //     e[e.length] = data;
    //     console.log(testarray)
    // }

    // Custom.prototype.CSfilter = (e, s ,f) => {
    //     for(let i=0; i < e.length; i++){
    //         switch(s){
    //             case '<': if(e[i] < f ){ console.log(e[i]) }
    //             break;
    //             case '<=': if(e[i] <= f ){ console.log(e[i]) }
    //             break;
    //             case '>': if(e[i] > f ){ console.log(e[i]) }
    //             break;
    //             case '>=': if(e[i] >= f ){ console.log(e[i]) }
    //             break;
    //             case '===': if(e[i] === f ){ console.log(e[i]) }
    //             break;
    //             case '==': if(e[i] == f ){ console.log(e[i]) }
    //             break;
    //             case '!==': if(e[i] !== f ){ console.log(e[i]) }
    //             break;
    //             case '!=': if(e[i] != f ){ console.log(e[i]) }
    //             break;
    //         }
    //     }
    // }
    //
    //let cs = new Custom()

    const mapCreate = (array) => {
        let tarray = []
        for(let i=0; i < array.length; i++){
            tarray.push(array[i]);
        }
        return tarray
    }
    console.log(mapCreate(testarray))

    const concatCreate = (exist, add) => {
        const concat = exist;
        concat[concat.length] = add

        return concat;
    }
    console.log(concatCreate(testarray, 3))

    const filterCreate = (array, ifnumber) => {
        let tarray = []
        for(let i=0; i < array.length; i++){
            const number = array[i];
            if(ifnumber(number)){
                tarray.push(number)
            }
        }
        return tarray
    }
    console.log(filterCreate(testarray, e => e > 50))

    return (
        <>
            <div>
                ddd
            </div>
        </>
    )

}

export default Array;