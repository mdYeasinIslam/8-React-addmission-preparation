import React from 'react';

import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Tostify.css"

const Toastify = () => {

    const notify = ()=>{
        toast('Congratulations,Your task is completed!!!!')
    }
    return (
        <div className=''>
            <button className='tostify btn mt-4 bg-primary' onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Toastify;