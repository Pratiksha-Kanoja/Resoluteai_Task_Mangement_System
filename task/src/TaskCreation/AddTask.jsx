// TaskForm.js
import React, { useState } from 'react';
import { database } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import './AddTask.css'
import Navbar from '../Common/Navbar';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskref = collection(database, 'TaskManagement')
    addDoc(taskref, { title, description, dueDate , completed:"false"})
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
        <h1>Add Task</h1>
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
  );
};

export default AddTask;
