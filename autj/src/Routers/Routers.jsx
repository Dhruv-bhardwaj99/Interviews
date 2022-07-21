import { Routes, Route } from "react-router";
import { Login } from "../Components/Authentication/Login";
import { Register } from "../Components/Authentication/Register";
import { Home } from "../Components/Home";

export const AllRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>

            {/* Authentication */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}