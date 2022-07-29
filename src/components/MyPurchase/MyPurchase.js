import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DisplayPurchase from '../DisplayPurchase/DisplayPurchase';
import './MyPurchase.css';

const MyPurchase = () => {
    const[myPurchase, setMyPurchase] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/purchasedBooks/${user.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setMyPurchase(data));
    }, []);

    const handleRemoveMyPurchase = id => {
        console.log(id);
    }

    // console.log(myPurchase);
 
    return (
        <div className="container">
            <div className='mypurchase mt-5'>
                {
                    myPurchase.map(purchase => <DisplayPurchase 
                    key = {purchase._id}
                    purchasedBookData = {purchase}
                    handleRemoveMyPurchase = {handleRemoveMyPurchase}
                    >
                    </DisplayPurchase> )
                }
            </div>
        </div>
    );
};

export default MyPurchase;