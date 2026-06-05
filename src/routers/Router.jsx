import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Portal } from "../pages/Portal"
import { Deuses } from "../pages/Deuses"
import { DetalhesDeuses } from "../pages/DetalhesDeuses"

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Portal/>}/>
                <Route path="/deuses" element={<Deuses/>}/>
                <Route path="/deuses/:id" element={<DetalhesDeuses/>}/>
            </Routes>
        </BrowserRouter>
    )
}