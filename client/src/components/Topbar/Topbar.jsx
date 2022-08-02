import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Topbar.css'
const Topbar = () => {
  const {user,dispatch}=useContext(Context)
  const handleLogout =()=>{
    dispatch({type:"LOGOUT"})
  }
  const PF = "http://localhost:5000/images/";
  return (
    <div className='top'>
      <div className="topLeft">
       <a href="http://facebook.com" rel="noreferrer" target='_blank'> <i className="fa-brands topIcon fa-2x fa-square-facebook"></i></a>
       <a href="http://twitter.com" rel="noreferrer" target='_blank'> <i className="fa-brands topIcon fa-2x fa-square-twitter"></i></a>
       <a href="http://pinterest.com" rel="noreferrer" target='_blank'> <i className="fa-brands topIcon fa-2x fa-square-pinterest"></i></a>
       <a href="http://instagram.com" rel="noreferrer" target='_blank'> <i className="fa-brands topIcon fa-2x fa-square-instagram"></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">WRITE</Link>
          </li>
          {user && <li className="topListItem" onClick={handleLogout} >LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
      {user ? (
          <Link className="link" to="/settings">
           <img className="topImg" src={user.profilePic ? PF+user.profilePic : "https://i.ibb.co/MBtjqXQ/no-avatar.gif" } alt="" />
          </Link>) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  )
}

export default Topbar