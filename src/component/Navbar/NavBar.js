import React,{useState} from 'react'
import './NavBar.css'
import Navlogo from './Navlogo.png'
import { Link } from 'react-router-dom'


const NavBar = (props) =>{
    const [userislogin,setUserislogin] = useState(false)
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
            {/* <Link to="/"><li>Home</li></Link> */}
            {/* <Link to="/addActivity"><li>Add Activity</li></Link> */}    
            <Link to="/login"><li>Login</li></Link>
            {/* <button className='nav-btn'>Login</button> */}
        </ul>
    </div>
</nav>
}

export default NavBar