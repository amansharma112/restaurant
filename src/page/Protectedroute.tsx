import { Navigate, Outlet } from "react-router-dom"


export default function Protectedroute() {
    const login = localStorage.getItem("login")
  return (
    login?<Outlet/>:<Navigate to ="/login"/>
  )
}
