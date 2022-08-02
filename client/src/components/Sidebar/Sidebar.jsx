import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  const [cat, setCat] = useState([])
    useEffect(() => {
      const getCat=async()=>{
        const res=await axios.get(`/categories`)
        setCat(res.data)
      }
      getCat();
    }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {
          cat.map((c)=>(
            <Link to={`/?cat=${c.name}`} key={c._id} className="link">
            <li className="sidebarListItem" key={c._id} >{c.name}</li>
            </Link>
            ))
          }
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="http://facebook.com" rel="noreferrer" target='_blank'><i className="fa-brands sidebarIcon fa-2x fa-square-facebook"></i></a>
        <a href="http://twitter.com" rel="noreferrer" target='_blank' ><i className="fa-brands sidebarIcon fa-2x fa-square-twitter"></i></a>
        <a href="http://pinterest.com"rel="noreferrer" target='_blank'><i className="fa-brands sidebarIcon fa-2x fa-square-pinterest"></i></a>
        <a href="http://instagram.com"rel="noreferrer" target='_blank'><i className="fa-brands sidebarIcon fa-2x fa-square-instagram"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar