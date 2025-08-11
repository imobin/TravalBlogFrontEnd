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
function App() {
  const [postList, setpostList] = useState([]) 
  const [selectedPost, setselectedPost] = useState(
        {id: "",
        author: "",
        title: "",
        content: "",
        cover: "",
        date: ""})
  useEffect(() => {
    axios
      .get("http://localhost:3333/post/")
      .then((i) => {
        setpostList(i.data)
        // console.log(postList);
      })
      .catch((i) => {
      console.log(i)
      });
  }, []);
  console.log(postList);
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home postList={postList}/>}/>
        <Route path='/CreatePost' element={<CreatePost />}/>
        <Route path='/PostDetails/:id' element = {<PostDetails setselectedPost={setselectedPost} selectedPost={selectedPost}/>}/>
        <Route path='/UpdatePost/:id' element = {<UpdatePost setselectedPost={setselectedPost} selectedPost={selectedPost}/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
