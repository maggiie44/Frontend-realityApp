import { Link,useNavigate } from "react-router-dom"
import React, { useState } from 'react'
import axios from "axios"
import LoginStatus from "./statuslogin"
import './login.css' 
import { invalid } from "joi"

function LoginPage (props){
    const [username,setUsername] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [userislogin,setUserislogin] = useState(false)
    const [checkUser,SetCheckUser]= useState(false)
    let navigate = useNavigate()

    const login = () => {
        axios({
          method: "POST",
          data: {
            username: username,
            password: userPassword,
          },
          withCredentials: true,
          url: "http://localhost:4000/users/login",
        }).then((res) => {
          console.log(res.data);
          if(res.data === "Successfully Authenticated"){
            navigate("/");
          }
          else {
            alert("username or password incorrect")
            SetCheckUser(true)
          }
        });
      };
    

    
    
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
            <Link to='/register'><button type="button" className="btn" >
            SignUp
            </button></Link> 
        
        </div>
    )
}

export default LoginPage