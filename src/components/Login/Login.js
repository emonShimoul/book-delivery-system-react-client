import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const {googleLogin} = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log("Logged In...", result);
        })
    }
    
    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        // <input {...register("firstName")} type="text" />
        // <input {...register("email")} type="email" />
        // <input type="number" {...register("age", { min: 18, max: 99 })} />
        // <input type="submit" />
        // </form>

        <div>
            <Form className='w-50 mx-auto mt-5 text-start p-4 border rounded-3' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><h5>Email Address</h5></Form.Label>
                <Form.Control {...register("email")} type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><h5>Password</h5></Form.Label>
                <Form.Control {...register("password")} type="password" placeholder="Enter Password" />
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
            <div className='mt-4'>
                <Button className='me-3 px-5 py-2' variant="warning" onClick={handleGoogleLogin}>
                    Login with Google
                </Button>
                <Button className='ms-3 px-5 py-2' variant="secondary" type="submit">
                    Login with Twitter
                </Button>
            </div>
        </div>
    );
};

export default Login;