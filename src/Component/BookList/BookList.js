import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import Profile from '../Profile/Profile';
import CalculateTime from '../CalculateTime/CalculateTime'
import "./BookList.css"
const BookList = () => {
    const [bookList, setBookList] = useState([])
    const [profile, setProfile] = useState({})
    const [bookDetails,setDetails]= useState([])
    
// console.log(bookDetails)
    useEffect(() => { 
        fetch('data.json') 
            .then(res => res.json())
            .then(data => setBookList(data))
    }, [])
    useEffect(() => {
        fetch('feakProfile.json')
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [])
    const addTime=(Details)=>{
       const details=[...bookDetails,Details]
        setDetails(details)
    }
    return (
        <div className='study-section'>
            <div className="book-list">
                <h4 className='fw-bold fs-4'>Everyday's Routine:</h4>
                <div className='display-cart mt-5 mb-5'>
                    { 
                        bookList.map(book => <DisplayBooks 
                            key={book.id} book={book} addTime={addTime}
                        ></DisplayBooks>)
                    }
                </div>
            </div>
            <div className="profile-section ">
                <Profile profile={profile}></Profile>
                <CalculateTime bookDetails={bookDetails}></CalculateTime>
            </div>


        </div>
    );
};

export default BookList;