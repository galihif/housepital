//Library
import React from 'react'

//Styles
import { 
    Button,
    Navbar,
    Nav,
    Container,
    FormControl
 } from 'react-bootstrap';

 //Images
import navbar_logo from '../assets/navbar_logo.png'

const NavbarM = () => {
    return (
        <div>
            <Navbar collapseOnSelect className="px-lg-5" bg="white" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={navbar_logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <b>Housepital</b>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Button className="mx-2" variant="outline-primary" href="/login">Login</Button>
                    <Button className="mx-2" variant="primary" href="/register">Register</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarM