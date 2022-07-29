import React from 'react';

const DisplayPurchase = (props) => {
    const purchasedBookData = props.purchasedBookData;
    console.log(purchasedBookData);
    const {name, phone, email, date, address, bookname, bookprice} = purchasedBookData;
    return (
        <div className='bg-secondary text-white m-4 py-4 rounded-3'>
            <h5>{bookname}</h5>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{date}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p><small>{bookprice}</small></p>
            <button className='btn btn-warning'>Remove</button>
            {/* <button className='btn btn-warning' onClick={() => handleRemoveUserEvents(userData._id)}>Remove</button> */}
        </div>
    );
};

export default DisplayPurchase;