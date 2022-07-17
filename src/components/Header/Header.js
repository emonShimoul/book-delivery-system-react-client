import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link className='text-decoration-none text-dark' to="/">Book Delivery System</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='text-decoration-none text-dark px-3' to="/allbooks">All Books</NavLink>
                        <NavLink className='text-decoration-none text-dark px-3' to="/mypurchase">My Purchase</NavLink>
                        <NavLink className='text-decoration-none text-dark px-3' to="/allpurchase">All Purchase</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Link to="/login"><Button variant="success">Login</Button></Link>
                        <Link to="/login"><Button className='ms-3' variant="secondary">Log Out</Button></Link>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;