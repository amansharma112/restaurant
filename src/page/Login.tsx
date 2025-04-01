import { NavLink, useNavigate } from 'react-router-dom'
import image1 from '../assets/photos/p2.jpg'
import { useEffect, useState } from 'react'


export default function Login() {
    const navigate = useNavigate();
    // let flag = false
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handledata = (e:any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            let res_data = await response.json()
            let xyz = {...res_data.data}
            console.log("xz", xyz);
            console.log("abc", res_data);
            
            

            console.log("login", xyz.username);

            if(response.ok){
                // console.log("token", res_data.token);
                
                localStorage.setItem("token", res_data.token)
                localStorage.setItem("username", xyz.username)
                localStorage.setItem("login", "true")
            
                navigate("/admin")
                // console.log(items);
                // console.log(data);
                
                
            }
            else{
                alert("Invalid Id & Password")
            }

        } catch (error) {
            console.log(error);

        }
        
       
        // console.log(data);

    }

    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('key'));
        if (items) {
            setItems(items);
            // console.log(items);
            // console.log(data);
            
            
        }
    }, []);

    



    return (
        <>
            <div className="container mx-auto  md:grid grid-cols-2 gap-1 h-screen  ">

                <div className='md:h-screen'>
                    <img src={image1} alt="no image" className='md:ml-16 ml-8 rounded-2xl h-11/12 mt-8 w-4/5' />
                </div>
                <div className="  place-items-center  md:ml-28 mx-auto md:h-screen w-1/2">
                    <div className="place-items-center mt-36 mb-16">
                        <h2 className="md:text-5xl text-2xl font-medium">Welcome back!</h2>
                        <p>Please enter your details</p>
                    </div>

                    <form action="" onSubmit={handleSubmit} className="place-items-center">
                        <div className='md:w-[450px]' >
                            <h5 className='text-md font-medium'>Email</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text" name='email' value={data.email} onChange={handledata} placeholder="  Enter your email" />
                        </div>
                        <div className='md:w-[450px]'>
                            <h5 className='text-md font-medium'>Password</h5>
                            <input className='h-8 ml-2 border-2 rounded-md md:w-full' type="text" name='password' value={data.password} onChange={handledata} placeholder="  Enter your password" />
                        </div>
                        <div className='flex my-2 w-full justify-between'>
                            <div className='flex'>
                                <input className='ml-2 border-2 rounded-md' type="checkbox" />
                                <h5 className='text-md mr-10'>Remember me</h5>
                            </div>
                            <h5 className='text-left font-bold'>Forgot Password?</h5>
                        </div>

                        <div className='md:w-[450px]'>
                            <button type="submit" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                            <NavLink to="/signup">
                                <button type="submit" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">SignUp</button>
                            </NavLink>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
