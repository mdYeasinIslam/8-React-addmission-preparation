import React from 'react';
import "./BreckTime.css"
const BreckTime = () => {
    return (
        <div className='break-time mt-5 ms-4 me-4 d-flex justify-content-around'>
            <button> 10s</button>
            <button>20s</button>
            <button>30s</button>
            <button>40s</button>
        </div>
    );
};

export default BreckTime;