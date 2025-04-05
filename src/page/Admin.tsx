import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Admin() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);


    async function getDataa() {
        try {
            let userName = localStorage.getItem("username")
            let token = localStorage.getItem("token")
            console.log(userName, token);



            const response = await fetch(`http://localhost:8000/api/user/${userName}`, {
                method: "GET",
                headers: {
                    Authorization: `${token}`,
                },

            })


            let res_data = await response.json()
            console.log(res_data);

            console.log(res_data.data);
            setData(res_data.data)

        } catch (error) {
            console.log(error)

        }
    }


    useEffect(() => {
        getDataa()



    }, [])

    function resetData() {
        localStorage.removeItem("username")
        localStorage.removeItem("token")
        localStorage.removeItem("login")
        // localStorage.clear()
        navigate("/login")

    }





    return (
        <>



            <h1>{data.name}</h1>
            <h1>{data.phone}</h1>
            <h1>{data.email}</h1>
            <h1>{data.username}</h1>
            <h1>{data.password}</h1>
            <h1>{data.bio}</h1>

            <button type="button" onClick={resetData} className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Logout</button>

            <NavLink to={"/postin"}>
                <button type="button" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Post</button>

            </NavLink>
            < NavLink to={"/postin/post"}>
                <button type="button" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Show Post</button>

            </NavLink>
        </>
    )
}
