import axios from "axios";
import React from "react";
// import { submit } from "../../api";
import './inputAc.css'



const InputAc =(props)=>{

    const submit = () => {
        const hr = Math.floor(props.form.hr*60);
        const mn = parseInt(hr)+parseInt(props.form.mn);
        axios({
            method: "POST",
            data: {
              activityName: props.form.actTypes,
              timestamp: props.form.date,
              duration: mn,
              calories: props.form.cal,
              description: props.form.des
      
            },
            withCredentials: true,
            url: "https://backend-reality-app.vercel.app/users/me/records",
          })
            .then((response) => {
              console.log(response);
            }, (error) => {
              console.log(error);
            });
          return
      };


    return  (<div>
        
    <section >
        
        <div >
            <div >
                <div >
                <input type="text" value={props.form.actTypes} name="actTypes" onChange={props.handleChange} required />
                </div>
                <div className='form-date'>
            <label>Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="date" value={props.form.date} name="date" onChange={props.handleChange}  required/> 
            {/* max={todayDate} */}
        </div>
                <div>
            <label id='duration'>Duration</label> <br/>
            <input type="number" value={props.form.hr} name="hr" onChange={props.handleChange} min={0} max={24} required></input>
            <label>&nbsp;Hour&nbsp;&nbsp;&nbsp;&nbsp;</label> 
            <input type="number" value={props.form.mn} name="mn" onChange={props.handleChange} min={0} max={59} required></input>
            <label>&nbsp;Minute</label>  
        </div>
        <div>
            <label>Calorie&nbsp;&nbsp;</label>
            <input type="number" value={props.form.cal} name="cal" onChange={props.handleChange} min={0} max={9999}/>
            <label>&nbsp;&nbsp;cals</label>
        </div>
        <div>
            <label >Description: </label> <br/>
            <textarea name="des" cols="20" rows="3" value={props.form.des} onChange={props.handleChange}></textarea>
        </div>
            </div>
            <div className="">
            <button type="submit" className="button" onClick={submit}>Add</button>
            </div>
        </div>
    </section>
    </div> )
    

}

export default InputAc
