import React from 'react';

const DisplayPurchase = (props) => {
    const purchasedBookData = props.purchasedBookData;
    const handleRemoveMyPurchase = props.handleRemoveMyPurchase;
    // console.log(purchasedBookData);
    const {name, phone, email, date, address, bookname, bookprice} = purchasedBookData;

    return (
        <div className='bg-secondary text-white m-4 py-4 rounded-3'>
            <h5>{bookname}</h5>
            <p>{address}</p>
            <p>{phone}</p>
            <p>{date}</p>
            <p>{name}</p>
            <p><small>Price: {bookprice}</small></p>
            <button className='btn btn-warning me-1 px-3' onClick={() => handleRemoveMyPurchase(purchasedBookData._id)}>Remove</button>
            <button className='btn btn-dark ms-1 px-4'>Edit</button>
            {/* <button className='btn btn-warning' onClick={() => handleRemoveUserEvents(userData._id)}>Remove</button> */}
        </div>
    );
};

export default DisplayPurchase;