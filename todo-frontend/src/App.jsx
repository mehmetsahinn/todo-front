import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ListTaskComponent from './components/ListTaskComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TaskComponent from './components/TaskComponent'



function App() {

  return (
      <> 
      <BrowserRouter>
        <HeaderComponent/>
        <div className='min-vh-100'>
        <Routes>
          <Route path='/' element={<ListTaskComponent/>}></Route>
          <Route path='/tasks' element={<ListTaskComponent/>}></Route>
          <Route path='/add-task' element={<TaskComponent/>}></Route>
           <Route path='/edit-task/:id' element={<TaskComponent/>}></Route>
        </Routes>
        </div>
        <FooterComponent/>
      </BrowserRouter>
    </>

  )
}

export default App
