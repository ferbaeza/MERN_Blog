import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  const[username, setUsername]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[error, setError]=useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/auth/register", {
        username,
        email,
        password
      });
      res.data && window.location.replace("/login")
    }catch(error){
      console.error(error)
      setError(true)
    }

  }
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="registerInput" 
              onChange={(e)=> setUsername(e.target.value)}
              placeholder='Enter your username....'/>
            <label>Email</label>
            <input type="text" className="registerInput" 
              onChange={(e)=> setEmail(e.target.value)}
              placeholder='Enter your username....'/>
            <label>Password</label>
            <input type="password" className="registerInput" 
              onChange={(e)=> setPassword(e.target.value)}
              placeholder='Enter your username....'/>
        <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton" type='submit'>
        <Link className='link' to="/register">Login</Link>
        </button>
        {error && <span className='error'>Something its wrong</span>}
    </div>
  )
}
