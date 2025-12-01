import React, {useEffect, useState} from 'react'
import  { deleteTask, listTask}  from '../services/TaskService'
import { useNavigate } from 'react-router-dom'

function ListTaskComponent() {

    const [tasks ,setTasks]= useState([])

    const navigator= useNavigate();

    useEffect(()=>{
        getAllTask();
    },[])

    function getAllTask(){
        listTask().then((response)=>{
            setTasks(response.data);
       }).catch(error =>{
            console.error();
       })
    }

    function addNewTask(){
        navigator('/add-task')
    }
    function updateTask(id){
        navigator(`/edit-task/${id}`)
    }
    function removeTask(id){
        console.log(id)
        deleteTask(id).then((response)=> {
            getAllTask();
        }).catch(error=>{
        console.error(error);
      })
    }

  return (
    <div className='container min-vh-100 ' style={{ width: 'fit-content', minWidth: '540px'}} >
        <h2 className='text-center py-2'>List of Tasks</h2>
        <button className='btn btn-primary mb-2 ' onClick={addNewTask}>Add Task</button>

            <table className='table table-striped table-bordered '>
                <thead>
                    <tr>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Actions</th>
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
                            <td><button className='btn btn-primary mx-1' 
                            onClick={()=> updateTask(task.id) }>Update </button>
                            <button className='btn btn-danger mx-1' 
                            onClick={()=> removeTask(task.id) }>Delete </button>
                            </td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
    </div>
  )}


export default ListTaskComponent