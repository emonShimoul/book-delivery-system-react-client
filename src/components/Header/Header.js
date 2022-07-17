import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Book Delivery System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">All Books</Nav.Link>
                        <Nav.Link href="#action2">My Purchase</Nav.Link>
                        <Nav.Link href="#action3">All Purchase</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success">Login</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
};

export default Header;