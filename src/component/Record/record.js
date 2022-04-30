import React, { useEffect,useState } from 'react'
import './record.css'
// import { useUserRecords } from '../../hook'
// import {getRecords} from '../../api/index'
import Axios from 'axios';
import Modal from './modal/Modal';
import ListRecord from './ListRecord/ListRecord';

const Record =(props) =>{

    const [formRecords,setFormRecords] = useState([]);
    const [modalEditOpen, setModalEditOpen] = useState(false);
   const [modelID, setModelID] = useState();

    useEffect(() => {
      Axios({
        method: "GET",
        withCredentials: true,
        url: "https://backend-reality-app.vercel.app/users/me/records",
      }).then((res) => {
          setFormRecords(res.data);
          console.log(res.data);
      });
    },[])


    return (
        <div className='BoxDown'>
         {modalEditOpen ? <Modal setModalEditOpen={setModalEditOpen} modelID={modelID}/> :
      (<>
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
          </div>&nbsp;|&nbsp;
          <div className='data-activity-user'>
            Detail
          </div>&nbsp;&nbsp;
        </div>
        </div>
        </div>

        
        {formRecords.map((mockData)=>{
     
            return(
              <ListRecord 
              key={mockData._id}
              id={mockData._id} 
              actName={mockData.activityName}
              date={mockData.timestamp}
              duration={mockData.duration}
              calories={mockData.calories}
              description={mockData.description}
             //  setModalEditOpen={setModalEditOpen}
             setModalEditOpen={setModalEditOpen}
             modalEditOpen={modalEditOpen}
             setModelID={setModelID}
               />  
            )})}
         </>)}
    </div>
    )
    
}

export default Record;