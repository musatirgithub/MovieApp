import { register } from "../firebase";
import { useState } from "react";
import { async } from "@firebase/util";
import {Toaster} from 'react-hot-toast';

const Register = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e)=>{
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
}

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
        <button style={{width:'400px'}} type="submit" className="btn btn-primary d-block mx-auto">
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
