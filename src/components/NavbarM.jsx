//Library
import React from 'react'

//Styles
import { 
    Button,
    Navbar,
    Nav,
    Form,
    FormControl
 } from 'react-bootstrap';

 //Images
import navbar_logo from '../assets/navbar_logo.png'
 import footer_logo from '../assets/footer_logo.png'

const NavbarM = () => {
    return (
        <div>
            <Navbar className="px-5" bg="light" variant="light">
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
            </Navbar>
        </div>
    )
}

export default NavbarM