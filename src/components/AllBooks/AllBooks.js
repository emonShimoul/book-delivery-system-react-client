import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/books`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setAllBooks(data));
    }, []);

    return (
        <div className='my-5'>
            <div className="container">
                <div className="input-group mb-3 w-25 mx-auto mt-4">
                    <input type="text" className="form-control" placeholder="Search for Book" aria-label="Search for Event" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>
                <div className="row row-cols-1 row-cols-md-4 mt-4 g-4">
                    {
                        allBooks.map(book => 
                                <div key={book._id} className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{book.bookName}</h5>
                                            <p>{book.writerName}</p>
                                            <p><small>Price: {book.bookPrice} TK</small></p>
                                            <Link className='text-decoration-none text-white' to={`/purchaseBook/${book.eventTitle}`}><Button variant="warning mx-3">Purchase</Button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooks;