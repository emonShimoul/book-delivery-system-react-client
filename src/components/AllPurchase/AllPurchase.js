import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import DisplayPurchase from '../DisplayPurchase/DisplayPurchase';

const AllPurchase = () => {
    const[allPurchase, setAllPurchase] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/purchasedBooks`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setAllPurchase(data));
    }, []);
    console.log(allPurchase);
    return (
        <div className="container">
            <div className='mypurchase mt-5'>
                {
                    allPurchase.map(purchase => <DisplayPurchase 
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

export default AllPurchase;