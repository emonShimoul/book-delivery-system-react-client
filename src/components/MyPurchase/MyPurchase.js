import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

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

    console.log(myPurchase);
 
    return (
        myPurchase.map(mypurchase => <p>{mypurchase.bookname}</p>)
    );
};

export default MyPurchase;