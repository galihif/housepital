//Library
import React,{useState} from 'react'

//Styles
import './AppointmentSchedule.scss'
import { 
    Button,
    Image,
    Modal,
    Row,
    Col,
    Form
 } from 'react-bootstrap';

 //Images
import card_img from '../assets/card_img.png'

const AppointmentSchedule = (props) => {
    //state
    const [show, setShow] = useState(false);

    //method
    const toggleDialog = () => setShow(!show);
    return (
        <div>
            <Row className="my-4">
                <Col lg={4} className="d-flex justify-content-center">
                    <Image
                        src={card_img}
                        rounded
                        className="doc-photo" />
                </Col>
                <Col lg={6} className="py-2 d-flex align-items-center">
                    <div>
                        <h5 className="m-0">Dr. Udin Petot</h5>
                        <p className="text-muted my-2">Medical Check Up</p>
                        <p className="m-0">2021-01-01 19:00</p>
                    </div>
                </Col>
                <Col lg={2} className="d-flex align-items-end p-0">
                    <Button variant="danger mb-2" size="sm" onClick={toggleDialog}>Cancel</Button>
                </Col>
            </Row>

            <Modal show={show} onHide={toggleDialog} size="sm">
                <Modal.Header closeButton>
                    <Modal.Title>Book an Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-lg-4">
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Doctor Name</p>
                        </Col>
                        <Col lg={8}>
                            <p className="text-right">{props.doctorName}</p>
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Type</p>
                        </Col>
                        <Col lg={8}>
                            <p className="text-right">{props.type}</p>
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

export default AppointmentSchedule