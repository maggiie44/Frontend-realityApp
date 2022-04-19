import React,{useState , useEffect} from "react";
import Record from "../Record/record";
import Goal from "../Goal/goal.js";
import InputAc from "../inputactivityform/inputAc";
import Timer from "../Timer/Timer";
import ProfileData from "../Profile/ProfileData";
import leftArrow from './arrow-left-color.png'
import rightArrow from './arrow-right-color.png'
import runninglogo from './imgActivity/running-color.png'
import batmintonlogo from './imgActivity/batminton-color.png'
import bikelogo from './imgActivity/bike2-color.png'
import walklogo from './imgActivity/walk-color.png'
import weightlogo from './imgActivity/weight-color.png'
import swimminglogo from './imgActivity/swiming-color.png'

import './Acselect.css'


function ActivitySelect(props) {
const activityType =[
    {label:'Running', actSrc:runninglogo},
    {label:'Batminton', actSrc:batmintonlogo},
    {label:'Bike', actSrc:bikelogo},
    {label:'Walk', actSrc:walklogo},
    {label:'Weight', actSrc:weightlogo},
    {label:'Swim', actSrc:swimminglogo}

]
    const [slideAct, setSlideAct]=useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [form, setForm] = useState({
    actTypes: '',
    date: '',
    hr: 0,
    mn: 0,
    cal: 0,
    des: ""
  })



  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  } 

const next =()=>{
    if(slideAct ===(activityType.length-1)){
      setSlideAct(0)
    }else{
        const nextAct =slideAct+1
        setSlideAct(nextAct)
    }
}

const previous = () => {
    if (slideAct === 0) {
      setSlideAct(activityType.length-1)
    } else {
      const nextSide = slideAct - 1
      setSlideAct(nextSide)
    }
  }
  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  
  const Finsih = () => {
    const hrTimer = Math.floor(seconds/3600);
    const mnTimer = (Math.floor( seconds/60 )) % 60;
    const todayDate = new Date()
    const convertdate = (date) => {
      const arrayDate = todayDate.toLocaleDateString().split('/')
      const sufferDate = [arrayDate[2], 
                          (arrayDate[0] < 10 ? '0' : '') + arrayDate[0], 
                          (arrayDate[1] < 10 ? '0' : '') + arrayDate[1],]
      return sufferDate.join('-')
    }
    const newDate = convertdate(todayDate)
    console.log(newDate)
    setForm({
      ...form,
      hr: hrTimer,
      mn: mnTimer,
      actTypes: activityType[slideAct].label,
      date: newDate
    });
    setSeconds(0)
    setIsActive(false)
  }




    return  <section id="select">
   <div className="mainActivityPage">
          {/* <UserProfile/> */}
          <div className='duration'>
            <Timer seconds={seconds} setIsActive={setIsActive} isActive={isActive} setSeconds={setSeconds}/>  
              <div className='divTree'>
              <section className='slider'>
                <img src={leftArrow} className='s-select left-arrow' onClick={previous} alt='left' />
                <img src={activityType[slideAct].actSrc} alt='no internet' className='image'/>
                <img src={rightArrow} className='s-select right-arrow' onClick={next} alt='right' />
              </section>
                <div className='button-record'>
                  <button className='button' onClick={Finsih} >
                  RECORD
                  </button>
                </div>
              </div>
          </div>
            
          <div className='activityForm'>
            <h2>Your Activity </h2> 
            <form>
              <InputAc form={form} setForm={setForm} handleChange={handleChange} setUpdateRecord={props.setUpdateRecord} />
            </form>
          </div>
            
        
      
      </div>
      <div>
        </div>
      <div >     
      </div> 
</section>
}

export default ActivitySelect