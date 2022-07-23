import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';


const AddNewBook = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/mypurchase';

    const onSubmit = data =>{
        // console.log(data);
        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("Book Added Successfully!!")    
                navigate(redirect_uri);
            }
        })
    };

    return (
        <div>
            <Form className='w-50 mx-auto mt-5 text-start p-4 border rounded-3' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicBookName">
                <Form.Label><h5>Book Name</h5></Form.Label>
                <Form.Control {...register("bookName")} type="text" placeholder="Enter Book Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicWriterName">
                <Form.Label><h5>Writer Name</h5></Form.Label>
                <Form.Control {...register("writerName")} type="text" placeholder="Enter Writer Name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBookPrice">
                <Form.Label><h5>Price</h5></Form.Label>
                <Form.Control {...register("bookPrice")} type="number" placeholder="Enter Price" required/>
                </Form.Group>

                <div className='text-center'>
                <Button className='my-3 px-5 py-2' variant="primary" type="submit">
                Add Book
                </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddNewBook;