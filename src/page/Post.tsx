import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Post() {
    const navigate = useNavigate()
    const [data, setData] = useState([]);


    async function getDataa() {
        try {
            let userName = localStorage.getItem("username")
            let token = localStorage.getItem("token")
            console.log(userName, token);



            const response = await fetch(`http://localhost:8000/api/post/`, {
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






    return (
        <>
            {
                data.map((item) => (
                    <div className='place-items-center flex flex-wrap mb-16 border border-2 gap-4'>
                        <p className='text-4xl border border-2'>Title:{item.title}</p>
                        <p className='text-3xl border border-2'>Slug:{item.slug}</p>
                        <p className='text-xl border border-2'> Description:{item.description}</p>
                        <p className='text-2xl border border-2'>Author:{item.author}</p>
                    </div>
                ))
            }

            <NavLink to={"/admin"}>
                <button type="button" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Admin</button>
            </NavLink>
        </>
    )
}
