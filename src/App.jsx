import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import PostDetails from './Pages/PostDetails'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/CreatePost' element={<CreatePost />}/>
        <Route path='/PostDetails/:id' element = {<PostDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
