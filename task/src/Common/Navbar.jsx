import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const router = useNavigate();
  return (
    <div className='navbar'>
      <h2 onClick={()=>router('/login')}>Login</h2>
      <h2 onClick={()=>router('/register')}>Registeration</h2>
      <h2 onClick={()=>router('/addtask')}>Add Task</h2>
      <h2 onClick={()=>router('/updatetask')}>Update Task</h2>
      <h2 onClick={()=>router('/viewtask')}>View Task</h2>
      <h2 onClick={()=>router('/practice')}>Practice</h2>
    </div>
  )
}

export default Navbar