import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayBooks from '../DisplayBooks/DisplayBooks';
import "./BookList.css"
const BookList = () => {
    const [bookList,setBookList]=useState([])
    // console.log(bookList[0]?.name)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBookList(data))
    },[])
    return (
        <div className='study-section'>
            <div className="book-list"> 
            <h4 className='fw-bold fs-4'>Select per day exercise</h4>
            <div className='display-cart'>
               {
                bookList.map(book=><DisplayBooks key={book.id} book={book}></DisplayBooks>)
             } 
            </div>
             
            </div>
            <div className="study-time">
                <h1>profile ggggg</h1>
            </div>
           
         
        </div>
    );
};

export default BookList;