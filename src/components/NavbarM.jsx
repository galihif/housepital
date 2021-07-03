//Library
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Config
import { auth } from '../config/firebase'

//Styles
import { 
    Button,
    Navbar,
    Nav,
 } from 'react-bootstrap';

 //Images
import navbar_logo from '../assets/navbar_logo.png'

const NavbarM = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    //State
    const [isLogged, setLogged] = useState(false)

    //Method
    useEffect(() => {
        getUser()
    }, [isLogged])

    const getUser = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogged(true)
            } else {
                setLogged(false)
            }
        })
    }

    let button = <Button className="mx-2" variant="primary" href={`profile/${state.userData.id}`}>Profile</Button>

    if(state.userData.role === "admin"){
        button = <Button className="mx-2" variant="primary" href={`/admin`}>Admin</Button>
    }
    
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
                    {
                        isLogged ? button : (
                            <div>
                                <Button className="mx-2" variant="outline-primary" href="/login">Login</Button>
                                <Button className="mx-2" variant="primary" href="/register">Register</Button>
                            </div>
                        )
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarM