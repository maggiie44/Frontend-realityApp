import React from "react";
import './Timer.css'
import { useState,useRef  } from "react";


const Timer =(props) =>{
  function toggle() {
    props.setIsActive(!props.isActive);
  }

  function reset() {
    props.setSeconds(0);
    props.setIsActive(false);
  }

  function pad2(number) {
    return (number < 10 ? '0' : '') + number
    }

return (
<div>
    <div className='acitivity-right-timer-time'>
        <span>DURATION</span>
            <div>
                <div>{pad2(Math.floor(props.seconds/3600))}</div> : 
                <div>{pad2((Math.floor( props.seconds/60 )) % 60)}</div> :  
                <div>{pad2( props.seconds % 60 )}</div> 
            </div>
        </div>

        
        <div className='startStop'>
            <button 
            className={`button button-primary button-primary-${props.isActive ? 'active' : 'inactive'}`} 
            onClick={toggle}>
                {props.isActive ? 'PAUSE' : 'START'}
            </button>
            <button className="button" onClick={reset}>
                RESET
            </button>
        </div>
</div>
)
}

export default Timer