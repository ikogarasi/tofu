import { useState } from 'react'
import './App.css'
import { Signin } from './pages/SignIn'
import { HomePage } from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signIn' element={<Signin/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </>
  )
}

export default App
