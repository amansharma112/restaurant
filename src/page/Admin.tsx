import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Admin() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    
    async function getData(){
        try {
            let userName = localStorage.getItem("username")
            let token = localStorage.getItem("token")
            console.log(userName,token);
            console.log( datas);

            
            const response = await fetch(`http://localhost:8000/api/user/ ${userName}`, {
                method: "GET",
                headers: {
                    Authorization:`${token}`,
                },
                
            })

            const datas =await response.json()
            console.log(" datas");
            console.log(userName,token);

            
            // const data = response.json()
            
            // return response.json()

            

        } catch (error) {
            console.log(error);

    }
    }

// 
    // useEffect(() => {
        
            
        // if (data) {
        //     setData(data);
        //     console.log(data);

        // }
        
    // },[])

    function resetData(){
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        // localStorage.clear()
        navigate("/login")
        
    }

    
        
        
    
    return (
        <>
            <button type="button" onClick={getData} className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>

            {/* <h1>{data.name}</h1>
            <h1>{data.phone}</h1>
            <h1>{data.email}</h1>
            <h1>{data.password}</h1> */}

            <button type="button" onClick={resetData} className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>
           
        </>
    )
}
