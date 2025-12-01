import React, { useEffect, useState } from 'react'
import { createTask, getTask, updateTask } from '../services/TaskService';
import { useNavigate, useParams } from 'react-router-dom';

function TaskComponent() {

  const [taskName, setTaskName] = useState('')
  const [status, setStatus] = useState(false)
  const [description, setDescription] = useState('')

  const {id}=useParams();


  const navigator = useNavigate();

  useEffect(()=>{
    if(id){
      getTask(id).then((response)=>{
        setTaskName(response.data.taskName);
        setStatus(response.data.status);
        setDescription(response.data.description);
      }).catch(error=>{
        console.error(error);
      })
    }
  }, [id])

  function saveOrUpdateTask(e){
    e.preventDefault();
    if (!taskName.trim()) return alert("Task Name is required!");
    const task = {taskName, status, description}
    console.log(task)
    if(id){
      updateTask(id, task).then((response)=>{
        console.log(response.data);
        navigator('/tasks')
      })
    }else{
      createTask(task).then((response)=>{
        console.log(response.data);
        navigator('/')
      })  
    }
    
  }
  function pageTitle(){
        if(id){
          return <h2 className='text-center bg-dark text-light py-2 rounded-top'
          >Update Task</h2>
        }else{
          return <h2 className='text-center bg-dark text-light py-2 rounded-top'
          >Add Task</h2>
        }
    }

  

  return (
    <div className='container '>
      <br></br>
      <div className='row '>
        <div className='card col-md-6 offset-md-3 offset-md-3 px-0 '>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form >
              <div className='form-group mb-2'>
                <label className='form-label'>Task Name</label>
                <input 
                  type='text'
                  placeholder='Enter Task Name'
                  name='taskName'
                  value={taskName}
                  className='form-control'
                  onChange={(e)=>setTaskName(e.target.value)}
                >
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Task Description</label>
                <input 
                  type='text'
                  placeholder='Enter Description'
                  name='description'
                  value={description}
                  className='form-control'
                  onChange={(e)=>setDescription(e.target.value)}
                >
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Completed </label>
                <input 
                  type='checkbox'
                  name='status'
                  checked={status}
                  className='form-check-input border border-secondary ms-2'
                  onChange={(e)=>setStatus(e.target.checked)}
                >
                </input>
              </div>
              <button className='btn btn-success' onClick={saveOrUpdateTask}>Submit </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskComponent