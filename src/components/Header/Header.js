import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    // console.log(user);

    const handleLogOut = () => {
        logOut();
    }
    return (
        <div>
            <Navbar className='py-3' bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand><Link className='text-decoration-none text-info' to="/">Book Delivery System</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='text-decoration-none text-light px-3' to="/allbooks">All Books</NavLink>
                        <NavLink className='text-decoration-none text-light px-3' to="/mypurchase">My Purchase</NavLink>
                        <NavLink className='text-decoration-none text-light px-3' to="/allpurchase">All Purchase</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        {
                            (!user.email) ?
                            <div>
                                <Link to="/login"><Button variant="primary">Login</Button></Link>
                                <Link to="/register"><Button className='mx-4' variant="success">Register</Button></Link>
                            </div>
                            :
                             <div>
                                 <span className='fw-bold text-light mt-2 ms-2 me-3'>{user.displayName}</span>
                                <Link to="/logout"><Button variant="secondary" onClick={handleLogOut}>Log Out</Button></Link>
                             </div>
                        }
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;