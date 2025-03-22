import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./page/Login"
import Signup from "./page/Signup"
import Home from "./page/Home"
import About from "./page/About"
import Contect from "./page/Contect"
import Navbar from "./page/Navbar"
import Admin from "./page/Admin"


function App() {


  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
