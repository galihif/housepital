//Library
import React from 'react'

//Styles
import './Register.scss'
import {
    Button,
    Container,
    Row,
    Col,
    FormControl,
    Form
} from 'react-bootstrap';

const Register  = () => {
    return(
        <div className="d-flex justify-content-center align-items-center">
            <Container className="register-container my-5 p-5" style={{ width: "28em" }}>
                <p className="title text-center">Register</p>
                <Row className="mt-4">
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                type="name"
                                placeholder="First Name"
                                aria-label="Name"
                            />
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                type="name"
                                placeholder="Last Name"
                                aria-label="Name"
                            />
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                type="number"
                                placeholder="Age (Years)"
                                aria-label="Age"
                            />
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                type="username"
                                placeholder="Username"
                                aria-label="Username"
                            />
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-2">
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
                        <Button variant="primary btn-block">Register</Button>
                    </Col>
                </Row>
                <p className="text-center my-1">or</p>
                <Row className="mb-4">
                    <Col>
                        <Button variant="outline-primary btn-block" href="/login">Login</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register