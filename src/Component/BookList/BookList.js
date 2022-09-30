import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import Profile from '../PreparationDetails/Profile';
import "./BookList.css"
const BookList = () => {
    const [bookList, setBookList] = useState([])
    const [profile, setProfile] = useState({})
    
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
    return (
        <div className='study-section'>
            <div className="book-list">
                <h4 className='fw-bold fs-4'>Select per day exercise</h4>
                <div className='display-cart mt-5 mb-5'>
                    {
                        bookList.map(book => <DisplayBooks key={book.id} book={book}></DisplayBooks>)
                    }
                </div>

            </div>
            <div className="profile-section ms-5">
    
                <Profile profile={profile}></Profile>
            </div>


        </div>
    );
};

export default BookList;