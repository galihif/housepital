//Library
import React, {useState} from 'react'

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
    //state
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [age, setAge] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    //method
    const handleChange = (e) => {
        switch(e.target.id){
            case "firstName":
                setFirstName(e.target.value)
                break
            case "lastName":
                setLastName(e.target.value)
                break
            case "age":
                setAge(e.target.value)
                break
            case "username":
                setUsername(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break
            default:
                break
        }
    }

    const handleRegister = () => {
        console.log(firstName,lastName,age,username,email,password)
    }

    return(
        <div className="d-flex justify-content-center align-items-center">
            <Container className="register-container my-5 p-5" style={{ width: "28em" }}>
                <p className="title text-center">Register</p>
                <Row className="mt-4">
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                onChange={handleChange}
                                id="firstName"
                                type="name"
                                placeholder="First Name"
                                aria-label="Name"
                            />
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex">
                            <FormControl
                                onChange={handleChange}
                                id="lastName"
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
                                onChange={handleChange}
                                id="age"
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
                                onChange={handleChange}
                                id="username"
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
                                onChange={handleChange}
                                id="email"
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
                                onChange={handleChange}
                                id="password"
                                type="password"
                                placeholder="Password"
                                aria-label="Password"
                            />
                        </Form>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Button variant="primary btn-block" onClick={handleRegister}>Register</Button>
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