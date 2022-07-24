import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PurchaseBook = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const {bookname, bookprice} = useParams();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='container mt-4 mb-5'>
            <h5>Hi, {user.displayName}</h5>
            <p>Thank you for purchasing {bookname}, Price: {bookprice}</p>
            <div className="register-form rounded">
                <h4 className='mb-4 fw-bold text-start'>Purchase Book</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} type="text" value={user.displayName || ''} className='input-group input-field' placeholder="Name" required />
                    <input {...register("email")} type="email" value={user.email || ''} placeholder="Email" className='input-group input-field' required />
                    <input {...register("date")} type="date" className='input-group input-field' required />
                    <input {...register("description")} type="text" placeholder="Description" className='input-group input-field' />
                    {/* <input {...register("event")} type="text" value={event} placeholder="Event Name" className='input-group input-field' required /> */}
                    <input type="submit" className='btn btn-primary mt-4 px-5' value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default PurchaseBook;