import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DisplayPurchase from '../DisplayPurchase/DisplayPurchase';

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

    // console.log(myPurchase);
 
    return (
        <div className="container">
            <div className='events mt-5'>
                {
                    myPurchase.map(purchase => <DisplayPurchase 
                    key = {purchase._id}
                    purchasedBookData = {purchase}
                    // handleRemoveUserEvents = {handleRemoveUserEvents}
                    >
                    </DisplayPurchase> )
                }
            </div>
        </div>
    );
};

export default MyPurchase;