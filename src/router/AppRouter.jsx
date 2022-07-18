import Navbar from "../components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
import MovieDetail from '../pages/MovieDetail';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login /> } />
            <Route path="/register" element={<Register /> } />
            <Route path="/" element={<Main /> } />
            <Route path="moviedetail/:id" element={<MovieDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;