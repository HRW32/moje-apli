import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import About from "./About/About"
import Clicker from "./Clicker/Clicker"


export default function AppRoutes(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/clicker" element={<Clicker />} />
            </Routes>
        </BrowserRouter></>
    )
}