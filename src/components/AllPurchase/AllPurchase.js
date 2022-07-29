import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

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
        <div>
            <h2>All Purchase</h2>
        </div>
    );
};

export default AllPurchase;