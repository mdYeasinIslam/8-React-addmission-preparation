import React from 'react';
import "./DisplayBooks.css"
const DisplayBooks = (props) => {
    // console.log(props.book.img)
    return (
        <div className="single-cart card" >
            
            <img  src={props.book.img} className="img-fluid card-img-top" alt="" />
            
            <div className="card-body">
                <h3 className="card-title">{props.book.name}</h3>
                <p>{props.book.details}</p>
                <p><strong className="card-text">Time: {props.book.time}hr</strong></p>
                <button className="btn btn-primary">Add me</button>
            </div>
        </div>
    );
};

export default DisplayBooks;