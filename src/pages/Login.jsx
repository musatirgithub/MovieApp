import { login, googleSignIn } from "../firebase";
import { useState } from "react";
import { async } from "@firebase/util";
import {Toaster} from 'react-hot-toast';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";

const Login = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {loggedUser, setLoggedUser} = useContext(UserContext);

const handleSubmit = async (e)=>{
    e.preventDefault();
    const user = await login(email, password);
    setLoggedUser(user.email.slice(0, user.email.indexOf('@')));
    setEmail('');
    setPassword('');
    navigate('/');
}

const handleGoogleSignIn = async ()=>{
  const user = await googleSignIn();
  setLoggedUser(user.displayName)
  navigate('/');
}
console.log(loggedUser);
  return (
    <section>
    <Toaster position="top-right" toastOptions={{style:{color:'black'}}}/>
      <form className="mx-auto mt-5" style={{ maxWidth: 400 }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        <button 
        style={{ width: 400 }}
        type="submit" 
        className="btn btn-primary d-block mx-auto">
          Login
        </button>
      </form>
      <button type="submit" 
      style={{ width: 400 }}
      className="btn btn-primary d-block mx-auto mt-4" 
      onClick={handleGoogleSignIn}>
          Continue with Google
       </button>
    </section>
  );
};

export default Login;