import { Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import CreatePost from './Pages/CreatePost'
import PostDetails from './Pages/PostDetails'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/CreatePost' element={<CreatePost />}/>
        <Route path='/PostDetails/:id' element = {<PostDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
