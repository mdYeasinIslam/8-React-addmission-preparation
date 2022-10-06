import React from 'react';
import "./Profile.css"
const Profile = (props) => {
    const { name, img, age, weight, height } = props.profile
    return (
        <div className=''>
            <div className='profile d-flex'>
                <img src={img} className="" alt="" />
                <h1 className='fs-4 '>{name}</h1>
            </div>
            <div className='d-flex  justify-content-around mt-5 ms-4 me-4 profile-details '>
                <p>Weight: <p className='fs-3'>{weight} <span>kg</span> </p> </p>
                <p>Height: <p className='fs-3'>{height} <span>fit</span>  </p></p>
                <p>Age: <p className='fs-3'>{age} <span>yrs</span> </p></p>
            </div>
        </div>
    );
};

export default Profile;