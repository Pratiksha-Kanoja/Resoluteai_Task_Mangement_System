import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import toast from 'react-hot-toast';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useNavigate();

  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        //const user = userCredential.user;
        toast.success("Registration successfully")
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
      <form onSubmit={SignUp}>
        <h1>Register</h1>
        <label htmlFor="email">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <button type='submit' value='Submit'>Submit</button>
        <p className='note'>Already have an account? <span onClick={() => router('/login')}>Signin Now</span></p>
      </form>
    </div>
  )
}

export default Register