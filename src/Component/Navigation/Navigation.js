import React from 'react';
import logo from "../../Images/logo.jpg"
import "./Navigation.css"
const Navigation = () => {
    return (
        <div>
            <nav className='navigation d-flex align-items-center'>
                <img src={logo} alt="" />
                <h1 className='fw-bold fs-4'>UNIVERSITY-Addmission-Preparation</h1>
            </nav>
            <div>
           
            </div>
        </div>
    );
};

export default Navigation;