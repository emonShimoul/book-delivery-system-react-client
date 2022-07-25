import React from 'react';

const DisplayPurchase = (props) => {
    const purchasedBookData = props.purchasedBookData;
    console.log(purchasedBookData);
    return (
        <div>
            <h2>Display Purchase</h2>
        </div>
    );
};

export default DisplayPurchase;