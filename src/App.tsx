import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./page/Login"
import Signup from "./page/Signup"
import Home from "./page/Home"
import About from "./page/About"
import Contect from "./page/Contect"
import Navbar from "./page/Navbar"
import Admin from "./page/Admin"
import Protectedroute from "./page/protectedroute"


function App() {
    const login = localStorage.getItem("login")

  return (
    <>
    
      <BrowserRouter>
      <Navbar login = {login}/>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contect" element={<Contect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


          {/* ProtectedRoute  */}
           <Route element={<Protectedroute/>}>
           <Route path="/about" element={<About />} />
           <Route path="/admin" element={<Admin />} />

           </Route>


         


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
