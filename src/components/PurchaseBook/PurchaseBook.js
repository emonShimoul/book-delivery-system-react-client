import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PurchaseBook.css';

const PurchaseBook = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const {bookname, bookprice} = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/mypurchase';

    const onSubmit = data => {
        fetch('http://localhost:5000/purchasedBooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(data => {
            if(data.insertedId){
                alert("You have been purchased the book successfully!!")
                reset();
                navigate(redirect_uri);
            }
        })
    }
    return (
        <div className='container my-5'>
            <div className="register-form rounded">
                <h4 className='mb-4 fw-bold text-start'>Purchase Book</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} type="text" value={user.displayName || ''} className='input-group input-field' placeholder="Name" required />
                    <input {...register("email")} type="email" value={user.email || ''} placeholder="Email" className='input-group input-field' required />
                    <input {...register("bookname")} type="text" value={bookname} placeholder="Book Name" className='input-group input-field' required />
                    <input {...register("bookprice")} type="text" value={bookprice} placeholder="Book Price" className='input-group input-field' required />
                    <input {...register("date")} type="date" className='input-group input-field' required />
                    <input {...register("phone")} type="number" placeholder="Phone Number" className='input-group input-field' required />
                    <input {...register("address")} type="text" placeholder="Delivery Address" className='input-group input-field' required />
                    <input type="submit" className='btn btn-primary mt-4 px-5' value="Purchase" />
                </form>
            </div>
        </div>
    );
};

export default PurchaseBook;