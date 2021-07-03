//Library
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//Config
import { auth, firestore } from '../config/firebase'

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

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    //state
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    //method
    const handleChange = (e) => {
        switch (e.target.id) {
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

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email,password)
            .then((userCredential) => {
                let user = userCredential.user
                getUser(user.uid)
            })
            .catch((error) => {
                var errorMessage = error.message;
                setError(errorMessage)
            })
    }

    const getUser = (id) => {
        firestore.collection("Patients").doc(id).get()
            .then((doc) => {
                let user = doc.data()
                dispatch({ type: "LOGIN", userData: user})
                if (user.role === "admin") {
                    history.push(`/admin`)
                } else {
                    history.push(`/profile/${id}`)
                }
            })
    }
    return(
        <div className="d-flex justify-content-center align-items-center">
            <Container className="login-container my-5 p-5" style={{width:"28em"}}>
                <p className="title text-center">Login</p>
                <Row className="mt-4">
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
                {
                    typeof error !== "undefined" ? (
                        <Row className="mt-4">
                            <Col>
                                <p className="text-danger">{error}</p>
                            </Col>
                        </Row>
                    ) : null
                }
                <Row className="mt-4">
                    <Col>
                        <Button variant="primary btn-block" onClick={handleLogin}>Login</Button>
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