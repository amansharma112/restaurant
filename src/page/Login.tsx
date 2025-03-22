import image1 from '../assets/photos/p2.jpg'

export default function Login() {
    return (
        <>
            <div className="container mx-auto  grid grid-cols-2 gap-1 h-screen ">

                <div className='h-screen'>
                    <img src={image1} alt="no image" className='ml-16 rounded-2xl h-11/12 mt-8 w-4/5' />
                </div>
                <div className="  place-items-center  ml-28 h-screen w-1/2">
                    <div className="place-items-center mt-36 mb-16">
                        <h2 className="text-5xl font-medium">Welcome back!</h2>
                        <p>Please enter your details</p>
                    </div>

                    <form action="" method='post' className="">
                        <div className='w-[450px]' >
                            <h5 className='text-md font-medium'>Email</h5>
                            <input className='h-8 ml-2 border-2 rounded-md w-full' type="text" placeholder="  Enter your email" />
                        </div>
                        <div>
                            <h5 className='text-md font-medium'>Password</h5>
                            <input className='h-8 ml-2 border-2 rounded-md w-full' type="text" placeholder="  Enter your password" />
                        </div>
                        <div className='flex my-2 w-full justify-between'>
                            <div className='flex'>
                            <input className='ml-2 border-2 rounded-md' type="checkbox" />
                            <h5 className='text-md mr-10'>Remember me</h5>
                            </div>
                            <h5 className='text-left font-bold'>Forgot Password?</h5>
                        </div>

                        <div>
                            <button type="button" className="w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
