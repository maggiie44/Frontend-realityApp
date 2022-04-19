import { Link,useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import axios from "axios"
import './login.css' 

function LoginPage (props){
    const [username,setUsername] = useState('')
    const [userPassword,setUserPassword] = useState('')
    let navigate = useNavigate()
    const login = () =>{
        axios.post("http://localhost:4000/users/login",{
              username: username,
              password: userPassword,
            
          },{withCredentials: true}).then((res) => {console.log(res)
            if(res.data === "Successfully Authenticated"){
                props.setIsLogin(true);
                navigate("/");
            }});
    }
    
    
    return (
        <div className="container login-page">
      
            
            <div className="form">
            
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
            </div>
    
            
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" onChange={(e)=> setUserPassword(e.target.value)}/>
            </div>
            </div>
            
            
    
            {/* button click login */}
            
            <button type="button" className="btn" onClick={login}>
            Login 
            </button>
            <button type="button" className="btn" >
            <Link to='/register'>SignUp</Link> 
            </button>
        
        </div>
    )
}

export default LoginPage