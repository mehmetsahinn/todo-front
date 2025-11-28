import React, {useEffect, useState} from 'react'
import  {listTask}  from '../services/TaskService'
import { useNavigate } from 'react-router-dom'

function ListTaskComponent() {

    const [tasks ,setTasks]= useState([])

    const navigator= useNavigate();

    useEffect(()=>{
        listTask().then((response)=>{
            setTasks(response.data);
        }).catch(error =>{
            console.error();
        })

    },[])

    function addNewTask(){
        navigator('/add-task')
        
    }

  return (
    <div className='container mb-5 min-vh-100'>
        <h2 className='text-center py-2'>List of Tasks</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTask}>Add Task</button>

            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tasks.map(task=>
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.taskName}</td>
                            <td>{String(task.status)}</td>
                            <td>{task.description}</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
    </div>
  )}


export default ListTaskComponent