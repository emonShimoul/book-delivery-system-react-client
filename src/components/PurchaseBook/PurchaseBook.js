import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PurchaseBook = () => {
    const {user} = useAuth();
    const {bookname} = useParams();
    console.log(bookname);
    return (
        <div className='mt-5'>
            <h5>Hi, {user.displayName}</h5>
            <hp>Thank you for purchasing {bookname}</hp>
        </div>
    );
};

export default PurchaseBook;