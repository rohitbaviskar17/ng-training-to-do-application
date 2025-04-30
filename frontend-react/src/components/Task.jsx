import React, {useState} from 'react'
import deletebutton from './deletebutton';


const Task = () => {

    const [task, setTasks] = useState([]);
    const onDelete = ()=>{
       alert("Do you want to delete task {id}");
    }
    const onEdit = () =>{
        alert(`Do you want to Edit task {id}`);
    }
         
  return (
   <>
   <div className='container'>
   <h1>Tasks </h1>
     <table border={5} align='center'>
     <thead>
     <td>Sr. No </td>
        <td>Assigned To </td>
        <td>Status </td>
        <td>Due Date</td>
        <td>Priority </td>
        <td>Comments  </td>
        <td>Delete Task </td>
        <td>Edit Task </td>
        </thead>
      <tbody>
      <tr>
        <td>1.</td>
        <td>User 2</td>
        <td>Completed</td>
        <td>28 April 2025</td>
        <td>Normal</td>
        <td>2k ₹ Money transfer to user 2</td>
        <td> <button onClick={() => onDelete(task._id)}>Delete</button></td>
        <td>    <button onClick={() => onEdit(task)}>Edit</button></td>
      </tr>
      <tr>
        <td>2.</td>
        <td>User 1</td>
        <td>In Progress </td>
        <td>29 April 2025</td>
        <td>Low</td>
        <td>Wash Cloths in washing machine</td>
        <td> <button onClick={() => onDelete(task._id)}>Delete</button></td>
        <td>    <button onClick={() => onEdit(task)}>Edit</button></td>
      </tr>
      <tr>
        <td>3.</td>
        <td>User 3</td>
        <td>Yet not started</td>
        <td>30 April 2025</td>
        <td>High</td>
        <td>Project is must be completed before 10 PM</td>
        <td> <button onClick={() => onDelete(task._id)}>Delete</button></td>
        <td>    <button onClick={() => onEdit(task)}>Edit</button></td>
      </tr>
      </tbody>
    </table>

    </div>
   </>
  )
}

export default Task
