import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import userimg from './PROFILE.png'
import './profileData.css'


const ProfileData =(props) =>{

    const [toggleEdit, setToggleEdit] = useState(false);
    const [data, setData] = useState(null);

    const editProfileAPI= () => {
        axios({
            method: "PUT",
            data: {
              favorite: props.profileData.favorite,
              aboutMe: props.profileData.aboutMe,
              displayName: props.profileData.displayName,
              durationGoal: props.profileData.minGoal,
              caloriesGoal: props.profileData.calGoal
            },
            withCredentials: true,
            url: "https://backend-reality-app.vercel.app/users/edit",
          }).then((res) => {
            // console.log(res);
          });
    };
    const initProfileDataForm = () => {
      props.setProfileData({
        displayName: props.data.displayName,
        aboutMe: props.data.aboutMe,
        favorite: props.data.favorite,
        minGoal : props.data.durationGoal,
        calGoal: props.data.caloriesGoal
      }); 
      setToggleEdit(!toggleEdit);
    };

    const editProfileData = () => {
        editProfileAPI();
        setToggleEdit(false);
        props.getProfileAPI();
    };

    const logout =()=>{
        axios({
            method:"DELETE",
            withCredentials:true,
            url:'https://backend-reality-app.vercel.app/users/logout'
        })
        props.setIsLogin(false);
        setData(null)
    }
    

    return(
        <div>
            <div className="profile">
                <img src={userimg} alt="userPicture" />
            </div>
            <div className="profile">
            { toggleEdit ?
            <input type='text' placeholder='Enter Your Name' 
            name="displayName" value={props.profileData.displayName} 
            onChange={props.handleProfileChange}/>
            :(props.data ? <p>Welcome Back {props.data.displayName}</p> : <></>)}
            </div>
            <div className="userProfile">
            <div className="profile">
                about me
            </div>
            <div className="profile">
            {toggleEdit ?
                <input type='text' placeholder='Entre your about me' 
                name="aboutMe" value={props.profileData.aboutMe} 
                onChange={props.handleProfileChange}/>
                : (props.data ? <p>{props.data.aboutMe}</p> : <></>)}
            </div>
            </div>
            <div className="userProfile">
            <div className="profile">
                Favorite
            </div>
            <div className="profile">
            { toggleEdit ? 
                <input type='text' placeholder='Enter your favourite activity' 
                name="favorite" value={props.profileData.favorite} 
                onChange={props.handleProfileChange}/>
                : (props.data ? <p>{props.data.favorite}</p> : null)
            }
            </div>
            </div>
            {/* <div className="profile">
            {toggleEdit && <div className=''>
            Minutes Goal
            <br/>
              <input type='text' 
              placeholder='Enter your miniute goal' 
              name="minGoal" 
              value={props.profileData.minGoal} 
              onChange={props.handleProfileChange}/> 
          </div>
          }
          </div>
          <div className="profile">
            {toggleEdit && <div className=''>
            Calorie Goal
            <br/>
              <input type='text' 
              placeholder='Enter your calories goal'
              name="calGoal"
              value={props.profileData.calGoal}
              onChange={props.handleProfileChange}
              />
          </div>
          }
          </div> */}
            <div>
            { !toggleEdit ? 
            <button type="button" className="btn" onClick={initProfileDataForm}>edit</button> 
            : 
            <button type='button' className='btn' onClick={editProfileData}>Submit</button>
          }
            </div>
            <div>
            <Link to="/login"><button type="button" className="btn" onClick={logout} >
                logout
            </button></Link>
            </div>
        </div>
    )

}

export default ProfileData