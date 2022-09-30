import React from 'react';
import "./Navigation.css"
const logo = "logo.jpg"
const Navigation = () => {
    return (
        <div>
            <nav className='navigation d-flex align-items-center mb-3'>
                <img src={logo} alt="" />
                <h1 className='fw-bold fs-4'>UNIVERSITY-Addmission-Preparation</h1>
            </nav>
            <div>

            </div>
        </div>
    );
};

export default Navigation;