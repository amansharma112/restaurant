import { NavLink, redirect, useNavigate } from 'react-router-dom'
import image2 from '../assets/photos/p1.jpg'
import { useState } from 'react'

export default function Post_in() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        description: ''
    })

    const handlechange = (e: { target: { name: any; value: any } }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);
        
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            let token = localStorage.getItem("token")
            const response = await fetch(`http://localhost:8000/api/post/`, {
                method: "POST",
                headers: {

                    Authorization:`${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            console.log(response);

        } catch (error) {
            console.log(error);

        }

        localStorage.setItem("key", JSON.stringify(formData));
        navigate("/postin/post")


    }

    return (
        <>
            <div className="container mx-auto  md:grid grid-cols-2 gap-1 h-screen  ">

                <div className='md:h-screen'>
                    <img src={image2} alt="no image" className='md:ml-16 ml-8 rounded-2xl h-11/12 mt-8 w-4/5' />
                </div>
                <div className="  place-items-center  md:ml-28 mx-auto md:h-screen w-1/2">
                    <div className="place-items-center mt-36 mb-16">
                        <h2 className="md:text-5xl text-2xl font-medium">Create Your Post</h2>
                        <p>Please enter your details</p>
                    </div>

                    <form className="place-items-center">
                        <div className='md:w-[450px]' >
                            <h5 className='text-md font-medium'>Title</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text" name='title' value={formData.title} onChange={handlechange} placeholder="  Enter Full Name" />
                        </div>
                        <div className='md:w-[450px]' >
                            <h5 className='text-md font-medium'>Slug</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text" name='slug' value={formData.slug} onChange={handlechange} placeholder="  Enter User Name" />
                        </div>
                        <div className='md:w-[450px]' >
                            <h5 className='text-md font-medium'>Description</h5>
                            <input  className='h-8 ml-2 border-2 rounded-md md:w-full' type="text" name='description' value={formData.description} onChange={handlechange} placeholder="  Enter your phone number" />
                            
                        </div>



                        <div className='md:w-[450px]'>
                            <NavLink to="/postin/post">
                            <button onClick={handleSubmit} type="submit" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Post</button>
                            </NavLink>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
