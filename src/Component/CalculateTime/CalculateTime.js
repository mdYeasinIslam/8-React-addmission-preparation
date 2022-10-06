import React from 'react';

const CalculateTime = ({bookDetails}) => {
    console.log(bookDetails)
    let sum=0;
    let total=0;
    for(const details of bookDetails){
        sum=(sum + details.time)
        total=sum/60
    }
    return (
        <div className='ms-5'>
            <h4>Preparation Timer:</h4>
            <div>
                <h5>Study Time:{total} <strong>hours</strong> </h5>
                <h5 >Break Time:</h5>
            </div>
        </div>
    );
};  

export default CalculateTime;