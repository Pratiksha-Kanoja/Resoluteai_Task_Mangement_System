import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import './ViewTask.css'

const ViewTask = () => {
  const [viewtask, setViewTask] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'completed', 'pending'
  const [dueDateFilter, setDueDateFilter] = useState(null);

  const [completedTasks, setCompletedTasks] = useState([]);
  const router = useNavigate();

  function getAllTask() {
    const TaskCollectionRef = collection(database, 'TaskManagement');
    let taskQuery = query(TaskCollectionRef);

    // Apply filters based on completion status
    if (filterStatus === 'completed') {
      taskQuery = query(TaskCollectionRef, where('completed', '==', true));
    }
    else if (filterStatus === 'pending') {
      taskQuery = query(TaskCollectionRef, where('completed', '==', "false"));
    }

    // Apply filter based on due date
    const q = dueDateFilter
      ? query(taskQuery, where("dueDate", "==", dueDateFilter))
      : taskQuery;

    getDocs(q)
      .then(response => {
        const task = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id,
        }));
        setViewTask(task);
      })
      .catch(error => console.log(error.message));
  }

  function deleteTask(id) {
    const deleteref = doc(database, 'TaskManagement', id)
    deleteDoc(deleteref)
      .then(response => {
        console.log(response)
        getAllTask()
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  function markAsCompleted(id) {
    // Update the completedTasks state with the task id
    setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, id]);

    // Update the task status in Firestore
    const taskRef = doc(database, 'TaskManagement', id);
    const updatedTaskData = {
      ...viewtask.find((task) => task.id === id).data,
      completed: true, // Add a "completed" field to your data model
    };

    // Update the document in Firestore
    updateDoc(taskRef, updatedTaskData)
      .then(() => {
        console.log('Task marked as completed in Firestore');
        // Optionally, refresh the task list
        getAllTask();
      })
      .catch((error) => {
        console.log('Error marking task as completed in Firestore:', error.message);
      });
  }
  function handleFilterChange(event) {
    setDueDateFilter(event.target.value);
  }

  useEffect(() => {
    getAllTask();
  }, [filterStatus, dueDateFilter])

  return (
    <div className='viewtask_container'>
      <Navbar />
      <p>Tasks</p>

      <label>Filter by Completion:</label>
      <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>


      <label>Filter by Due Date:</label>
      <input type="date" onChange={handleFilterChange} />





      <div className='viewtask'>
        {viewtask.map((task) => (
          <div key={task.id}>
            <h1>{task.data.title}</h1>
            <p>{task.data.description}</p>
            <p>Due date :{task.data.dueDate}</p>
            <div>
              <button onClick={() => router(`/updatetask/${task.id}`)}>Update Task</button>
              <button onClick={() => deleteTask(task.id)}>Delete Task</button>
              <button onClick={() => markAsCompleted(task.id)} disabled={completedTasks.includes(task.id)}>Marked as Completed</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewTask
