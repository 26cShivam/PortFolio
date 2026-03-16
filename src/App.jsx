import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {Route, Routes} from 'react-router-dom'
import Projects from './pages/Projects'
import Resume from './components/Resume/resume'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/resume' element={<Resume/>}/>

      </Routes>


      
    </>
  )
}

export default App
