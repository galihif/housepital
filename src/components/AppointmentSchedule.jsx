//Library
import React, { useState } from 'react'
import { firestore } from '../config/firebase';

//Styles
import './AppointmentSchedule.scss'
import { 
    Button,
    Image,
    Modal,
    Row,
    Col,
    Badge
 } from 'react-bootstrap';

 //Images
import card_img from '../assets/card_img.png'

const AppointmentSchedule = (props) => {
    //State
    const [show, setShow] = useState(false);
    const [appointmentSchedule, setAppointmentSchedule] = useState(props.appointmentSchedule)

    //Method
    const toggleDialog = () => setShow(!show);

    const handleCancel = () => {
        appointmentSchedule.isCancelled = true
        firestore.collection("AppointmentSchedules").doc(appointmentSchedule.id)
            .set(appointmentSchedule)
            .then(() => {
                alert("Appointment Cancelled")
                toggleDialog()
            })
    }
    return (
        <div>
            <Row className="my-4">
                <Col lg={4} className="d-flex justify-content-center">
                    <Image
                        src={appointmentSchedule.doctorPhoto}
                        rounded
                        className="doc-photo" />
                </Col>
                <Col lg={6} className="py-2 d-flex align-items-center">
                    <div>
                        <h5 className="m-0">{appointmentSchedule.doctorName}</h5>
                        <p className="text-muted my-2">{appointmentSchedule.doctorType}</p>
                        <p className="m-0">{appointmentSchedule.date} {appointmentSchedule.time}</p>
                    </div>
                </Col>
                <Col lg={2} className="d-flex align-items-end p-0">
                    {
                        appointmentSchedule.isCancelled ? (
                            <Badge variant="danger">Cancelled</Badge>
                        ) : appointmentSchedule.isCompleted ? (
                            <Badge variant="success">Completed</Badge>
                        ) : (
                            <Button variant="danger mb-2" size="sm" onClick={toggleDialog}>Cancel</Button>
                        )
                    }
                </Col>
            </Row>

            <Modal show={show} onHide={toggleDialog} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-lg-4">
                    <p>Are you sure want to cancel this appointment?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancel}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={toggleDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AppointmentSchedule