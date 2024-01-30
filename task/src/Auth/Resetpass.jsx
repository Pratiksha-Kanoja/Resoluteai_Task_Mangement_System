import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Resetpass = () => {
    const [reset, setReset] = useState('');

    function handlesubmit(e) {
        e.preventDefault();
        sendPasswordResetEmail(auth, reset)
            .then((userCredential) => {
                // Signed in 
                //const user = userCredential.user;
                // ...
                toast.success("check your email box")
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return (
        <div>
            <h1>Reset Password</h1>
            <form onSubmit ={handlesubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" value={reset} onChange={(e) => setReset(e.target.value)} />
                <br />
                <button type='submit' value='Submit'>Reset</button>
            </form>
        </div>
    )
}

export default Resetpass