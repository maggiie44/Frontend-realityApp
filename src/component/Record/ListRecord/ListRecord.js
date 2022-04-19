import React from "react";


function ListRecord({id,actName,date,duration,calories,setModalEditOpen,modalEditOpen, setModelID}) {

    const openModal = () => {
      setModalEditOpen(!modalEditOpen);
      setModelID(id);
    }
    return (
        <div className="record">
      <div className="record-box">
      <div className='data-activity' key={id} >
        <div className='data-activity-user'>
          {date&&date.slice(0,10)}
        </div>|
        <div className='data-activity-user'>
          {actName}
        </div>|
        <div className='data-activity-user'>
          {duration} min
        </div>|
        <div className='data-activity-user'>
          {calories} cal
        </div>|
        <div className='data-activity-user'>
        {/* <button className="iconModal" onClick={() => {setModalEditOpen(true)}}><FontAwesomeIcon icon={faSquarePen} size="lg" border className="colorFontAS"/></button>&nbsp; */}
        <button className="iconModal" onClick={openModal}>Edit</button>
        </div>
        
      </div>
      
      </div>
      </div>
    )

}
export default ListRecord;