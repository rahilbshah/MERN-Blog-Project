import Topbar from './components/Topbar/Topbar'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Settings from './pages/Settings/Settings'
import Home from './pages/Home/Home'
import Single from './pages/Single/Single'
import Write from './pages/Write/Write'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { useContext } from 'react'
import { Context } from './context/Context'
const App = () => {
  const {user}=useContext(Context)
  return (
    <>
    <div onLoad={window.scroll(0, 0)}>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home/> : <Login />} />
          <Route path="/register" element={user ? <Home/> :<Register />} />
          <Route path="/settings" element={user ? <Settings/> :<Register />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={user ? <Write/> :<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App