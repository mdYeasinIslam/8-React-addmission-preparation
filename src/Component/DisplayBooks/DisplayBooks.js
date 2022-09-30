import React from 'react';
import "./DisplayBooks.css"
const DisplayBooks = (props) => {
    console.log(props.book.img)
    return (
        <div class="single-cart card" >
            
            <img  src={props.book.img} class="img-fluid card-img-top" alt="" />
            
            <div class="card-body">
                <h3 class="card-title">{props.book.name}</h3>
                <p>{props.book.details}</p>
                <p><strong class="card-text">Time: {props.book.time}hr</strong></p>
                <button class="btn btn-primary">Add me</button>
            </div>
        </div>
    );
};

export default DisplayBooks;