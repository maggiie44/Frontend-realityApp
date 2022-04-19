import React, { useEffect,useState } from 'react'
import './record.css'
// import { useUserRecords } from '../../hook'
// import {getRecords} from '../../api/index'
import Axios from 'axios';

const Record =(props) =>{

    const [formRecords,setFormRecords] = useState([]);

    useEffect(() => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/users/me/records",
      }).then((res) => {
        setFormRecords(res.data);
        console.log(res.data);
        
      });
  
    },[])


    return (
        
        <div className='BoxDown'>
            <div className='record-title'>
            <div className='record-box'>
        <div className='data-activity'>
          <div className='data-activity-user'>
            DATE
          </div>&nbsp;|&nbsp;
          <div className='data-activity-user'>
            ACTIVITY
          </div>&nbsp;|&nbsp;
          <div className='data-activity-user'>
            TIMES
          </div>&nbsp;|&nbsp;
          <div className='data-activity-user'>
            CALORIES
          </div>&nbsp;&nbsp;
        </div>
        </div>
        </div>

        
        {formRecords.map((mockData)=>{
              const deletActivity=()=>{
                Axios({
                  method:"DELETE",
                  withCredentials:true,
                  url:`http://localhost:4000/users/me/records/${mockData._id}`
                }).then((res) => {
                  console.log(res.data);
                  window.location.reload(false);
                })
              }
            return(
                <div className='record' key={mockData._id}>
                <div className='record-box'>
                <div className='data-activity'>
                    <div className='data-activity-user'>
                        {mockData.timestamp&&mockData.timestamp.slice(0,10)}
                    </div>&nbsp;|&nbsp;
                    <div className='data-activity-user'>
                        {mockData.activityName}
                    </div>&nbsp;|&nbsp;
                    <div className='data-activity-user'>
                        {mockData.duration}
                    </div>&nbsp;|&nbsp;
                    <div className='data-activity-user'>
                        {mockData.calories}
                    </div>
                </div>
                
                </div>
                    <div >
                      <button className='delet-icon' onClick={deletActivity}>X</button>
                    </div>
                </div>
            )})}
    
    </div>
    )
    
}

export default Record;