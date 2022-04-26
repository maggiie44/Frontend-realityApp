import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css' 
import Passwordalert from "./passwordalert";
import Useralert from "./useralert";


function Register (){
  const [registerUsername,setRegisterUsername] = useState('')
  const [registerPassword,setRegisterPassword] = useState('')
  const [registerDisplayname, setRegisterDisplayname] = useState('')
  const [invalidUsername, setInvalidUsername] = useState(false)
  const [invalidpwd,setInvalidPwd]= useState(false)


  // const pwdok = registerPassword.length>=8 && registerPassword.length<=12
  // const username = registerUsername.length>=3
  


  let navigate = useNavigate()
  const register =() =>{
      axios.post('https://backend-reality-app.vercel.app/users/register',{
          
            username:registerUsername,
            password:registerPassword,
            displayName:registerDisplayname
          ,
          withCredentials: true,
      }).then((res) => {console.log(res)
      if(res.data === "User Created"){
        setInvalidUsername(false)
        setInvalidPwd(false)
        navigate("/login")
      }else if(res.data === 'Username required'){
        setInvalidUsername(true)
        setInvalidPwd(false)
      }else if(res.data === 'Password required'||res.data === 'Password must be contain lower character, capital character and number!'){
        setInvalidPwd(true)
        setInvalidUsername(false)
      }
      })
  }

  


    return(
    <form>
    <div className="container login-page">
     <div className="form-group">
          <label >Username</label>
          <input type="text" name="username" placeholder="username" onChange={(e)=>setRegisterUsername(e.target.value)} />
          {/* {username ? '' :<Useralert/>} */}
          {!invalidUsername ? '' :<Useralert/>}
        </div>

    <div className="form-group">
            <label htmlFor="email">Display Name</label>
            <input type="text" name="displayName" placeholder="DisplayName" onChange={(e)=>setRegisterDisplayname(e.target.value)}/>
        </div>

    <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" onChange={(e)=>setRegisterPassword(e.target.value)}
          />
          {!invalidpwd ? '' : <Passwordalert />}
          
        </div>

        <button type="button" className="btn" onClick={register}>
        Register
      </button>
    </div>
      </form>  
    )
}

export default Register