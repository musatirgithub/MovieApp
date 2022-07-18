import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {logout} from '../firebase';
import {useNavigate, Link} from 'react-router-dom';
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const {loggedUser, setLoggedUser} = useContext(UserContext);

  const handleLogout = ()=>{
    logout();
    setLoggedUser(null);
    navigate('/');
  }

  return (
    
    <nav className="navbar navbar-expand-md navbar-light bg-primary">
    <Toaster position="top-right" toastOptions={{style:{color:'black'}}}/>
      <div className="container-fluid">
        <Link className="navbar-brand ms-4 text-light" to="/">
          Shutter Movie App
        </Link>

        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 gap-4">
          {loggedUser ? <li className="nav-item text-light"><button className="btn btn-primary">Welcome {loggedUser}</button></li>:<li className="nav-item">
              <button className="btn btn-primary border border-light" onClick={()=>navigate('/login')}>Login</button>
            </li>}
          {loggedUser ? <li className="nav-item">
              <button className="btn btn-primary border border-light" onClick={handleLogout}>Logout</button>
            </li> : <li className="nav-item">
              <button className="btn btn-primary border border-light" onClick={()=>navigate('/register')}>Register</button>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
