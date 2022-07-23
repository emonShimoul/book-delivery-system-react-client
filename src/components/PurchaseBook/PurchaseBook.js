import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PurchaseBook = () => {
    const {user} = useAuth();
    const {bookname, bookprice} = useParams();
    return (
        <div className='mt-5'>
            <h5>Hi, {user.displayName}</h5>
            <p>Thank you for purchasing {bookname}, Price: {bookprice}</p>
        </div>
    );
};

export default PurchaseBook;