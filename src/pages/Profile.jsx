// Libraries
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Styles
import './Profile.scss'
import {
    Container,
    Image,
    Row,
    Col,
    Tab,
    Tabs,
    Form,
    Button
} from 'react-bootstrap';

//image
import card_img from '../assets/card_img.png'
import AppointmentSchedule from '../components/AppointmentSchedule';

//Components

const Profile = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    
    //State
    const [appointmentSchedules, setAppointmentSchedules] = useState([])
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [age, setAge] = useState()
    const [username, setUsername] = useState()

    
    return(
        <div className="">
            <Container className="profile-container my-5 mx-5 mx-lg-auto" style={{ width: "40em", height: "9em" }}>
                <Row>
                    <Col lg={3} xs={4} className="p-0">
                        <Image
                            src={card_img}
                            rounded
                            className="user-photo" />
                    </Col>
                    <Col lg={6} xs={8} className="p-4">
                        <h4>Elizabeth Olsen</h4>
                        <p className="text-muted">@eliolsen24</p>
                        <p>29 years old</p>
                    </Col>
                    <Col lg={3} className="p-4">
                        <Button variant="danger mx-auto d-flex justify-content-center" size="sm" type="submit">
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Container>
            
            <Container className="my-5 mx-5 mx-lg-auto" style={{ width: "40em" }}>
                <Row>
                    <Col className="p-0">
                        <Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
                            <Tab eventKey="appointments" title="Appointments">
                                <div className="tab-container p-5">
                                    {
                                        appointmentSchedules.length === 0? (
                                            <div className="p-5">
                                                <p className="text-center">You have no appointment</p>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        appointmentSchedules.map((key,appointmentSchedule) => {
                                            return key === appointmentSchedules.length ? (
                                                <AppointmentSchedule/>
                                            ) : (
                                                <div>
                                                    <AppointmentSchedule/>
                                                    <hr/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Tab>
                            <Tab eventKey="settings" title="Settings">
                                <div className="tab-container p-5">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="firstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter First Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="lastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Last Name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="age">
                                            <Form.Label>Age</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Age" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Save
                                        </Button>
                                    </Form>
                                </div>
                            </Tab>
                        </Tabs></Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Profile