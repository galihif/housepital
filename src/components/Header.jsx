//Library
import React from 'react'

//Styles
import './Header.scss'//Styles
import { 
    Button,
    Jumbotron,
    Row,
    Col,
 } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
            <Jumbotron className="px-5 d-flex align-items-center m-0">
                <Row>
                    <Col lg={8}>
                        <h1>Easy way to check your health</h1>
                        <p>
                            Make appointment with your favourite doctor  anywhere and anytime
                        </p>
                        <p>
                            <Button variant="primary" href="/register">Get Started</Button>
                        </p>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}

export default Header