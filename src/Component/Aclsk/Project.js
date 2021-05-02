import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Project = () => {
    const [ page, setPage ] = useState(1000)

    useEffect(()=>{
        let date1 = new Date();
        let year = date1.getFullYear(); // 년, 2015
        let month = (date1.getMonth()); // 월, 11[1을 더해야함. 유일하게 조심해야할 부분. 1월은 0이다.]
        let today = date1.getDate(); // 일, 14
        let date2 = new Date(year, month, today, 16, 33, 40);
        let date = date2-date1;
        console.log(date1,date2)
        setTimeout(()=> (timer(), console.log("asd")), date-1000)
    },[])

    const timer = () => {
        setInterval(() => {
            onclick()
        }, page)
    }

    const onclick = async () => {
        try {
            await axios.post("https://api.dsm-dms.com/apply/extension/12", {
                classNum: 8,
                seatNum: 4
            },{
                headers : {
                    authorization : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjAwMjQ1NzQsIm5iZiI6MTYyMDAyNDU3NCwianRpIjoiMjhmMWRlYjMtMDZiNC00MGI2LWE3ZGMtZjBjMDg3OTNiMjkwIiwiZXhwIjoxNjIwMDI1MTc0LCJpZGVudGl0eSI6Impvb25obzIwMDRrciIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.dmo55L3PRDac4UIS-vsLWP1QL21hLulIbABpmSw2_E8"
                }
            })
        }catch(e){
            e.response.status===200 ? console.log("pass") : setPage(1000000000)
        }
    }


    return (
        <>
            jdjdjdjd
        </>
    )
}

export default Project;