import axios from 'axios';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
import './login.css'

export default function Login() {
    const navigate=useNavigate();
    const [credentials,setCredentials]=useState({
        username:undefined,
        password:undefined,
    })

    const {loading,error,dispatch}=useContext(AuthContext);

    const handlechange=(e)=>{
        setCredentials((prev)=>({...prev,[e.target.id]:e.target.value}))
    }

    const handleClick= async e=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            const res=await axios.post("http://localhost:8800/api/auth/login",credentials);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data});
            navigate('/');
        }
        catch (err) {
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data})
        }


    }
  return (
    <div className='login'>
        <div className="lContainer">
            <input type="text" className="lInput" id='username' onChange={handlechange} placeholder='username'/> 
            <input type="password" className="lInput" id='password' onChange={handlechange} placeholder='password'/> 
            <button className="lButton" disabled={loading} onClick={handleClick}>Login</button>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  )
}
