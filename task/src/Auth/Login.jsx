import React, { useState } from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './Login.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        //const user = userCredential.user;
        toast.success("Login successfully")
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage)
      });
  }

  return (
    <div className='signin'>
      <form onSubmit={handlesubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <p onClick={() => router('/resetpass')}>Forget password?</p>
        <br />
        <button type='submit' value='Submit'>Submit</button>
        <p className='note'>Not member? <span onClick={() => router('/register')}>Signup Now</span></p>
      </form>
    </div>
  )
}

export default Login 