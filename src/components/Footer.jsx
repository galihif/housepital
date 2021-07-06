//Library
import React from 'react'

//Styles
import { 
    Navbar,
 } from 'react-bootstrap';

 //Images
import navbar_logo from '../assets/navbar_logo.png'

const Footer = () => {
    return (
        <div style={{height:"12em", backgroundColor:"white"}} className="p-5">
            <div className="d-flex justify-content-center align-items-center">
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
            </div>
            <p className="text-center">© 2021 - GIF Technologies</p>
        </div>
    )
}

export default Footer