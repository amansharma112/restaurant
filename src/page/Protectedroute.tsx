import { Navigate, Outlet } from "react-router-dom"


export default function Protectedroute() {
    const login = localStorage.getItem("login")

  return (
    login==="true"?<Outlet/>:<Navigate to ="/login"/>
  )
}
