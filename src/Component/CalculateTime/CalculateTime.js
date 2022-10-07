import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addLocal, displayLocal } from '../../utilities/addLocal';
import Toastify from '../ToastButton/Toastify';
import "./CalculateTime.css"

const CalculateTime = ({ bookDetails }) => {
    const [breakTime, setBreaktime] = useState([0])
    // console.log(breakTime)
    let total = 0;
    for (const details of bookDetails) {
        total = (total + details.time)
    }
  useEffect(()=>{
    const displayTime= displayLocal()
    console.log(displayTime)
    for(const time in displayTime){
        setBreaktime(time)
    } 
  },[breakTime])

    const sum = (time) => {
        addLocal(time)
        setBreaktime(time)  
    }
    return (
        <div>
            <div className='mt-5 ms-5'>
                <h3 >Break Time:</h3>
                <div className='break-time me-4 d-flex justify-content-around'>
                <button onClick={() => sum(0)}>0 min</button>
                <button onClick={() => sum(10)}> 10 min</button>
                <button onClick={() => sum(15)}>15 min</button>
                <button onClick={() => sum(20)}>20 min</button>
            </div>
            </div>
            
            <div className='ms-5 mt-5'>
                <h4>Preparation Timer:</h4>
                <div className='fw-bold fs-5'>
                    <div className='d-flex justify-content-evenly border border-dark mb-2' >
                        <p >Study Time:</p>
                        <p> {total} min </p>
                    </div >
                    <div className='d-flex justify-content-evenly  border border-dark'>
                        <p >Break Time:</p>
                        <p> {breakTime} min</p>
                    </div>
                </div>
            </div>
            <Toastify></Toastify>
        </div>
    );
};

export default CalculateTime;