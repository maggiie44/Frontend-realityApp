import React from 'react'
import './NavBar.css'
import Navlogo from './Navlogo.png'
import { Link } from 'react-router-dom'



const NavBar = (props) =>{
    return <nav className="navbar">
  
    <div className="nav-icon">
        <img src={Navlogo}width="50"/>
        <a style={{color : '#946dc0'}}>The</a><a style={{color: ' #cf4b9c'}}>Reality</a>
    </div>


        {/* <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
     */}

    <div className="nav-menu">
        <ul>
            <Link to="/"><li>Home</li></Link>
            {/* <Link to="/addActivity"><li>Add Activity</li></Link> */}
            {!props.islogin ?<Link to="/login"><li>Login</li></Link> : <Link to="/login"><li>logout</li></Link>}
        </ul>
    </div>
</nav>
}

export default NavBar