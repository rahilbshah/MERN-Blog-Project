import './Home.css'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Posts from '../../components/Posts/Posts'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  const {search}=useLocation()
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  }, [search])

  return (
    <>
    <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}

export default Home