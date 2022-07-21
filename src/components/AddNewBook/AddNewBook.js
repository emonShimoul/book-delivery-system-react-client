import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const AddNewBook = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Form className='w-50 mx-auto mt-5 text-start p-4 border rounded-3' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicBookName">
                <Form.Label><h5>Book Name</h5></Form.Label>
                <Form.Control {...register("bookName")} type="text" placeholder="Enter Book Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicWriterName">
                <Form.Label><h5>Writer Name</h5></Form.Label>
                <Form.Control {...register("bookName")} type="text" placeholder="Enter Writer Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBookPrice">
                <Form.Label><h5>Price</h5></Form.Label>
                <Form.Control {...register("bookPrice")} type="number" placeholder="Enter Price" />
                </Form.Group>

                <div className='text-center'>
                <Button className='my-3 px-5 py-2' variant="primary" type="submit">
                Add Book
                </Button>
                <p>Don't have an account? <Link to="/register" className='text-primary'>Create an account</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default AddNewBook;