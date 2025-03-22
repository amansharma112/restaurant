import {  NavLink } from 'react-router-dom'
// import "../App.css"

export default function Navbar() {
  return (
    <>
    <nav className='gap-3 bg-gray-800 text-red-700'>
        
        <NavLink className='m-4 p-5 text-4xl' to="/">Home</NavLink>
        <NavLink className='m-4 p-5 text-4xl' to="/about">About</NavLink>
        <NavLink className='m-4 p-5 text-4xl' to="/contect">Contact-Us</NavLink>
        <NavLink className='m-4 p-5 text-4xl' to="/login">Login</NavLink>
        
  </nav>
    </>
  )
}