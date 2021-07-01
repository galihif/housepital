// Libraries
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Styles
import './Admin.scss'
import {
    Container,
    Image,
    Row,
    Col,
    Modal,
    Tabs,
    Form,
    Button
} from 'react-bootstrap';

//image
import card_img from '../assets/card_img.png'
import DoctorAppointmentAdmin from '../components/DoctorAppointmentAdmin';

//Components

const Admin = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    
    //State
    const [appointmentSchedules, setAppointmentSchedules] = useState([1, 2, 3, 4])
    const [show, setShow] = useState(false);

    //method
    const toggleDialog = () => setShow(!show);
    
    return(
        <div className="">
            <Container className="mx-5 my-3 mt-5 mx-lg-auto" style={{ width: "40em" }}>
                <p className="text-center admin-title">Administrator</p>
                <Button variant="primary mb-2" size="sm" onClick={toggleDialog}>Add Appointment</Button>
            </Container>
            
            <Container className="mb-5 mx-5 mx-lg-auto" style={{ width: "40em" }}>
                <div className="admin-app-container p-5">
                    {
                        appointmentSchedules.length === 0 ? (
                            <div className="p-5">
                                <p className="text-center">You have no appointment</p>
                            </div>
                        ) : null
                    }
                    {
                        appointmentSchedules.map((key, appointmentSchedule) => {
                            return key === appointmentSchedules.length ? (
                                <DoctorAppointmentAdmin />
                            ) : (
                                <div>
                                    <DoctorAppointmentAdmin />
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </Container>

            <Modal show={show} onHide={toggleDialog} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Add Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-lg-4">
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Doctor Name</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control type="text" placeholder="Enter Name" />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Type</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control type="text" placeholder="Enter Type" />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Photo</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control type="file" placeholder="Upload Photo" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDialog}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={toggleDialog}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default Admin