import React from 'react';

import "./DisplayBooks.css"
const DisplayBooks = (props) => {
    const { img, name, time } = props.book
// console.log(props.book)
    return (
        <div className="single-cart card" >

            <img src={img} className="img-fluid card-img-top" alt="" />

            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p>{props.book.details}</p>
                <p><strong className="card-text">Time: {time}min</strong></p>
                <button onClick={()=>props.addTime(props.book)} className="btn btn-primary">Add to Routine</button>
            </div> 
           
        </div>
    );
};

export default DisplayBooks;