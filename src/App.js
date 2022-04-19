
import './App.css';
import NavBar from './component/Navbar/NavBar';
// import InputAc from './component/inputactivityform/inputAc'
// import Record from './component/Record/record';
import ActivitySelect from './component/ActivitySelect/ActivitySelect';
import LoginPage from './component/login/login';
import Register from './component/login/register';
import Profile from './home/profile';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';


function App() {
  const [isLogin, setIsLogin] =useState(false)
  return (
    <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Profile setIsLogin={setIsLogin}/>} />
      <Route path="/login"  element={<LoginPage setIsLogin={setIsLogin}/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
     
     
    </div>
  );
}

export default App;