import React from 'react'
import Home from '../src/home/Home'

import {Route,Routes} from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import Contact from './Components/Contact'
import About from './Components/About'
import Login from './Components/Login'



function App() {
  return (
    <div className='dark:bg-slate-800 dark:text-white'>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>

    </div>
  )
}

export default App
