import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css' 


function Register (){
  const [registerUsername,setRegisterUsername] = useState('')
  const [registerPassword,setRegisterPassword] = useState('')
  const [registerDisplayname, setRegisterDisplayname] = useState('')


  let navigate = useNavigate()
  const register =() =>{
      axios.post('http://localhost:4000/users/register',{
          
            username:registerUsername,
            password:registerPassword,
            displayName:registerDisplayname
          ,
          withCredentials: true,
      }).then((res) => {console.log(res)
      if(res.data === "User Created"){
        navigate("/login")
      }
      })
  }




    return(
    <form>
    <div className="container login-page">
     <div className="form-group">
          <label >Username</label>
          <input type="text" name="username" placeholder="username" onChange={(e)=>setRegisterUsername(e.target.value)}/>
        </div>

    <div className="form-group">
            <label htmlFor="email">Display Name</label>
            <input type="text" name="displayName" placeholder="DisplayName" onChange={(e)=>setRegisterDisplayname(e.target.value)}/>
        </div>

    <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" onChange={(e)=>setRegisterPassword(e.target.value)}
          />
          
        </div>

        <button type="button" className="btn" onClick={register}>
        Register
      </button>
    </div>
      </form>  
    )
}

export default Register