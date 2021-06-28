//Library
import React from 'react'

//Styles
import './Login.scss'
import {
    Button,
    Container,
    Row,
    Col,
    FormControl,
    Form
} from 'react-bootstrap';

const Login  = () => {
    return(
        <div className="d-flex justify-content-center align-items-center">
            <Container className="login-container my-5 p-5" style={{width:"28em"}}>
                <p className="title text-center">Login</p>
                <Row className="mt-4">
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                type="email"
                                placeholder="Email"
                                aria-label="Email"
                            />
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                            />
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Button variant="primary btn-block">Login</Button>
                    </Col>
                </Row>
                <p className="text-center my-1">or</p>
                <Row className="mb-4">
                    <Col>
                        <Button variant="outline-primary btn-block" href="/register">Register</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login