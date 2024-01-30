import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const router = useNavigate();
  return (
    <div className='navbar'>
      <p onClick={()=>router('/login')}>Login</p>
      <p onClick={()=>router('/register')}>Registeration</p>
      <p onClick={()=>router('/addtask')}>Add Task</p>
      <p onClick={()=>router('/updatetask')}>Update Task</p>
      <p onClick={()=>router('/viewtask')}>View Task</p>
    </div>
  )
}

export default Navbar