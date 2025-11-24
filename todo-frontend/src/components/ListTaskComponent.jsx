import React, {useEffect, useState} from 'react'
import  {listTask}  from '../services/TaskService'

function ListTaskComponent() {

    const [tasks ,setTasks]= useState([])

    useEffect(()=>{
        listTask().then((response)=>{
            setTasks(response.data);
        }).catch(error =>{
            console.error();
        })

    },[])




  return (
    <div className='container'>
        <h2 className='text-center'>List of Tasks</h2>

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