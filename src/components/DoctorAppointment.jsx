//Library
import React,{useState} from 'react'

//Styles
import './DoctorAppointment.scss'
import { 
    Button,
    Card,
    Modal,
    Row,
    Col,
    Form
 } from 'react-bootstrap';

 //Images
import card_img from '../assets/card_img.png'

const DoctorAppointment = (props) => {
    //state
    const [show, setShow] = useState(false);
    const [doctorAppointment, setDoctorAppointment] = useState(props.doctorAppointment)

    //method
    const toggleDialog = () => setShow(!show);
    return (
        <div>
            <Card style={{ width: '16rem' }} className="app-card">
                <Card.Img variant="top" src={doctorAppointment.photo} style={{height: "10em"}} />
                <Card.Body>
                    <Card.Title>{doctorAppointment.doctorName}</Card.Title>
                    <Card.Text>
                        {doctorAppointment.type}
                    </Card.Text>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" onClick={toggleDialog}>Apply</Button>
                    </div>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={toggleDialog} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Book an Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-lg-4">
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Doctor Name</p>
                        </Col>
                        <Col lg={8}>
                            <p className="text-right">{doctorAppointment.doctorName}</p>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Type</p>
                        </Col>
                        <Col lg={8}>
                            <p className="text-right">{doctorAppointment.type}</p>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Date</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control type="date" placeholder="Enter Date" />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Time</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control type="time" placeholder="Enter Date" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDialog}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={toggleDialog}>
                        Book Appointment
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DoctorAppointment