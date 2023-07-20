import './App.css'
import Navbar from './components/Navbar'
import DetailMovie from './pages/DetailMovie'
import Home from './pages/Index'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



const App = () => {
  
  const [searchTerm, setSearchTerm] = useState('')
  
  const searchValue = (data)=> {
    setSearchTerm(data)
  }

  return(
      <div>
        <Navbar searchValue = {searchValue}/>
        <div className='app'>
          <Router>
            <Routes>
              <Route path='/' element={<Home searchTerm = {searchTerm}/>}/>
              <Route path="/movie/:movieId" element={<DetailMovie/>} />
            </Routes>
          </Router>
        </div>
      </div>
  )
}

export default App
