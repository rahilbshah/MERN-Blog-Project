import './Login.css'
import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import {Context} from '../../context/Context.js'
import axios from 'axios'
const Login = () => {
    const userRef=useRef()
    const passRef=useRef()
    const { dispatch, isFetching } = useContext(Context);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res=await axios.post('/auth/login',{
                username:userRef.current.value,
                password:passRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (error) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="loginInput" ref={userRef} type="text" placeholder="Enter your username..." />
                <label>Password</label>
                <input className="loginInput" ref={passRef} type="password" placeholder="Enter your password..." />
                <button className="loginButton" type='submit' disabled={isFetching} >Login</button>
            </form>
            <Link to='/register'>
            <button className="loginRegisterButton">Register</button>
            </Link>
        </div>
    );
}

export default Login