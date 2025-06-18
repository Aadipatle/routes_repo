import React from 'react'
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Register'
import ApiCalling from './pages/ApiCalling'
import StorageJs from './pages/Storage'
function App() {
  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route  element={<Home/>} path='/home' />
   <Route element={<Contact/>} path='/contact' />
  <Route element={<Register/>} path='register'/>
  <Route element={<ApiCalling/>} path='api'/>
  <Route element={<StorageJs/>} path='storage'/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App