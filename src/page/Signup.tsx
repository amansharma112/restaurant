import { NavLink, redirect, useNavigate } from 'react-router-dom'
import image2 from '../assets/photos/p1.jpg'
import { useEffect, useState } from 'react'

export default function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:'',
        password:'',
    })
     
    const handlechange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate("/login")
        // console.log(formData);
        

        
        
        
    }

    

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
        
      }, [formData]);


    return (
        <>
            <div className="container mx-auto  md:grid grid-cols-2 gap-1 h-screen  ">

                <div className='md:h-screen'>
                    <img src={image2} alt="no image" className='md:ml-16 ml-8 rounded-2xl h-11/12 mt-8 w-4/5' />
                </div>
                <div className="  place-items-center  md:ml-28 mx-auto md:h-screen w-1/2">
                    <div className="place-items-center mt-36 mb-16">
                        <h2 className="md:text-5xl text-2xl font-medium">Welcome back!</h2>
                        <p>Please enter your details</p>
                    </div>

                    <form  className="place-items-center" onSubmit={handleSubmit}>
                        <div className='md:w-[450px]' >
                            <h5 className='text-md font-medium'>Full Name</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text" name='name' value = {formData.name} onChange={handlechange}  placeholder="  Enter Full Name" />
                        </div>
                        <div className='md:w-[450px]' >
                            <h5 className='text-md font-medium'>Phone Number</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text"  name='phone' value = {formData.phone} onChange={handlechange}  placeholder="  Enter your phone number" />
                        </div>
                        <div className='md:w-[450px]' >
                            <h5 className='text-md font-medium'>Email</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text"  name='email' value = {formData.email} onChange={handlechange}  placeholder="  Enter your email" />
                        </div>
                        <div className='md:w-[450px]'>
                            <h5 className='text-md font-medium'>Set Password</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text"  name='password' value = {formData.password} onChange={handlechange}  placeholder="  Enter your password" />
                        </div>
                        <div className='flex my-2 w-full justify-between'>
                            <div className='flex'>
                                <input className='ml-2 border-2 rounded-md' type="checkbox" />
                                <h5 className='text-md mr-10'>Remember me</h5>
                            </div>
                            
                        </div>

                        <div className='md:w-[450px]'>
                        {/* <NavLink to="/login"> */}
                            <button type="submit" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signup</button>
                            {/* </NavLink> */}
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
