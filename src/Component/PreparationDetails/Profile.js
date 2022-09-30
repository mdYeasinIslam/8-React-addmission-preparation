import React from 'react';
import "./Profile.css"
const Profile = (props) => {
    const{name,img,age,weight,height,location}=props.profile
    return (
        <div className='profile d-flex'>
            
            <img src={img} className="" alt="" />
            <h1 className='fs-4 '>{name}</h1>
        </div>
    );
};

export default Profile;