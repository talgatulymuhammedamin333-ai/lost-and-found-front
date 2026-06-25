import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Registration from './pages/Registration'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PostsPage from './pages/LostPage'
import LostPage from './pages/LostPage'
import FoundPage from './pages/FoundPage'
import AddPostPage from './pages/AddPostPage'
import ReadMorePage from './pages/ReadMorePage'




function App() {
  return (

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/lost' element={<LostPage/>}/>
        <Route path='/found' element={<FoundPage/>} />
        <Route path='/addPost' element={<AddPostPage/>} />
        <Route path='/post/:id' element={<ReadMorePage/>} />

      </Routes>
    
  )
}

export default App