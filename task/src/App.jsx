import { Routes,Route } from "react-router-dom";
import Login from './Auth/Login'
import Register from "./Auth/Register";
import Navbar from "./Common/Navbar";
import Resetpass from "./Auth/Resetpass";
import AddTask from "./TaskCreation/AddTask";
import UpdateTask from "./TaskCreation/UpdateTask";
import ViewTask from "./TaskCreation/ViewTask";
import Practice from "./TaskCreation/Practice";

function App() {
  return (
    <div>
     <Routes>
     <Route path='/' element={<Navbar/>} />

     {/* Auth */}
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/resetpass' element={<Resetpass/>} />

      {/* Task */}

      <Route path='/addtask' element={<AddTask/>} />
      <Route path='/updatetask/:id' element={<UpdateTask/>} />
      <Route path='/viewtask' element={<ViewTask/>} />
      <Route path='/practice' element={<Practice/>} />
     </Routes>
    </div>
  );
}

export default App;
