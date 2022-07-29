import React, { useEffect, useState } from 'react';
import DisplayPurchase from '../DisplayPurchase/DisplayPurchase';

const AllPurchase = () => {
    const[allPurchase, setAllPurchase] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/purchasedBooks`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setAllPurchase(data));
    }, []);
    
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