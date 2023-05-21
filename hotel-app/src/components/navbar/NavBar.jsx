import './navbar.css'
import {Link, NavLink} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {useEffect, useState} from 'react'

export default function NavBar() {

  const {loading,error,dispatch}=useContext(AuthContext);
  const {user}=useContext(AuthContext);
  const logout=()=>{
    dispatch({type:"LOGOUT"})
  }

  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    prompt("Enter Username");
    prompt("Enter Password");
    alert("Successfully Logged IN");

    setCount(count + 1);
  };

  return (
    <div className="navbar">
    <div className="navContainer">
      <h4 style={{color:"#ED1C24"}}> User Count : {count} </h4>
      <Link to="/" style={{color:"#ED1C24",textDecoration:"none"}}>
      <span className="logo">Rj Travels</span>
      </Link>
      {user? <button onClick={logout} className="navButton">Logout</button> : (<div className="navItems">
        <button className="navButton">Register</button>
        <NavLink ><button className="navButton"  onClick={handleClick} >Login</button></NavLink>
      </div>)}
    </div>
  </div>
  )
}
