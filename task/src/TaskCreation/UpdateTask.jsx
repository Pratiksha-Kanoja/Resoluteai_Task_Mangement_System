import React, { useState } from 'react'
import { database } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import './AddTask.css'
import { useParams } from 'react-router-dom';
import Navbar from '../Common/Navbar';

const UpdateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskref = doc(database, 'TaskManagement', id)
    updateDoc(taskref, { title, description, dueDate })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error.message)
      })

    // Clear form inputs
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <div className='addtask_container'>
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <h1>Update Task</h1>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />
        <label>Due Date: </label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default UpdateTask

// import React from 'react'
// import { useParams } from 'react-router-dom';

// const UpdateTask = () => {
//   const {id} = useParams();
//   return (
//     <div>UpdateTask - {id}</div>
//   )
// }

// export default UpdateTask