import React,{useState, useEffect} from "react";
import axios from "axios";
import ActivitySelect from "../component/ActivitySelect/ActivitySelect";
import ProfileData from "../component/Profile/ProfileData";
import Goal from "../component/Goal/goal";
import Record from "../component/Record/record";


function Profile(props) {

    const [activityForm, setActivityForm] = useState(false);
    const [goal, setGoal] = useState()
    const [calGoal,setCalGoal] =useState()
    const [data, setData] = useState(null);
    const [profileData, setProfileData] = useState({
      displayName: "",
      aboutMe: "",
      favorite: "",
      minGoal: 0,
      calGoal: 0,
    });
  
    const getProfileAPI = () => {
      axios({
          method: "GET",
          withCredentials: true,
          url: "https://backend-reality-app.vercel.app/users/me",
          }).then((res) => {
          setData(res.data); 
          setGoal(res.data.durationGoal)
          setCalGoal(res.data.caloriesGoal)
          console.log(res.data)     
          });
    };
  
    useEffect( () => {
      let isMounted = true;
      axios({
        method: "GET",
        withCredentials: true,
        url: "https://backend-reality-app.vercel.app/users/me",
        }).then((res) => {
          if(isMounted) setData(res.data);      
        });
        return () => { isMounted = false}
    },[data]);
  
    const handleProfileChange = e => {
      setProfileData({
        ...profileData,
        [e.target.name]: e.target.value,
      })
    }
  
    const toggleForm = () => {
      setActivityForm(!activityForm)
    }

    
  
    return (
      <div className='profile-container'>
        <div className='mainActivityPage'>
          <div className='profile-box'>
            <ProfileData profileData={profileData} setGoal={setGoal} setCalGoal={setCalGoal} handleProfileChange={handleProfileChange} setProfileData={setProfileData} data={data} getProfileAPI={getProfileAPI}/>
          </div>
          <div className='content-box'>
          <ActivitySelect setActivityForm={setActivityForm}/>
          </div>
        </div>
          {/* <Goal goal={goal} calGoal={calGoal}/> */}
        <Record/>
      </div>
    )
  }

  export default Profile