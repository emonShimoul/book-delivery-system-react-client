import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Form className='w-50 mx-auto mt-5 text-start p-4 border rounded-3' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label><h5>Full Name</h5></Form.Label>
                <Form.Control {...register("fullname")} type="fullname" placeholder="Enter Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h5>Email Address</h5></Form.Label>
                <Form.Control {...register("email")} type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><h5>Password</h5></Form.Label>
                <Form.Control {...register("password")} type="password" placeholder="Enter Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicContact">
                <Form.Label><h5>Contact Number</h5></Form.Label>
                <Form.Control {...register("contactNumber")} type="number" placeholder="Enter Your Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <div className='text-center'>
                <Button className='my-3 px-5 py-2' variant="primary" type="submit">
                Login
                </Button>
                <p>Don't have an account? <Link to="/register" className='text-primary'>Create an account</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default Register;