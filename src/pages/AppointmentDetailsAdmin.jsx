// Libraries
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Styles
import './Admin.scss'
import {
    Container,
    Image,
    Row,
    Tab,
    Col,
    Modal,
    Tabs,
    Form,
    Button,
    Table,
    Badge
} from 'react-bootstrap';

//image
import card_img from '../assets/card_img.png'
import DoctorAppointmentAdmin from '../components/DoctorAppointmentAdmin';

//Components

const AppointmentDetailsAdmin = () => {
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
                <p className="text-center admin-title">Appointment Details</p>
            </Container>
            
            <Container className="mb-5 mx-5 mx-lg-auto" style={{ width: "40em" }}>
                <Row>
                    <Col className="p-0">
                        <Tabs defaultActiveKey="settings" id="uncontrolled-tab-example">
                            <Tab eventKey="settings" title="Settings">
                                <div className="tab-container p-5">
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
                                            <Image
                                                src={card_img}
                                                rounded
                                                className="doc-photo mt-2" />
                                            <Button variant="danger mx-5" type="submit">
                                                Delete
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col className="d-inline-flex justify-content-end">
                                            <Button variant="danger mx-3" type="submit">
                                                Delete
                                            </Button>
                                            <Button variant="primary" type="submit">
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                            <Tab eventKey="patientlist" title="Patient List">
                                <div className="tab-container p-5">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Patient Name</th>
                                                <th>Date and Time</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <Badge variant="secondary">Not Completed</Badge>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>
                                                    <Badge variant="secondary">Not Completed</Badge>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                        </Tabs></Col>
                </Row>
            </Container>

            <Modal show={show} onHide={toggleDialog} size="sm">
                <Modal.Header closeButton>
                    <Modal.Title>Add Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-lg-4">
                    ssdss
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

export default AppointmentDetailsAdmin