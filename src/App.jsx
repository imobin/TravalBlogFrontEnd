import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import PostDetails from './Pages/PostDetails'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UpdatePost from './Pages/UpdatePost'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAppContext } from './Context/appContext'

function App() {
  const {selectedPost,  setselectedPost} = useAppContext()
  // console.log(postList);
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/CreatePost' element={<CreatePost />}/>
        <Route path='/PostDetails/:id' element = {<PostDetails />}/>
        <Route path='/UpdatePost/:id' element = {<UpdatePost />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
