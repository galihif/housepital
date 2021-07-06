//Library
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

//Config
import { auth, firestore } from '../config/firebase'

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


const DoctorAppointment = (props) => {
    const state = useSelector((state) => state)
    //State
    const [show, setShow] = useState(false);
    const [doctorAppointment,] = useState(props.doctorAppointment)
    const [user,] = useState(state.userData)
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [isLogged, setLogged] = useState(false)

    //Method
    useEffect(() => {
        getUser()
    })


    const toggleDialog = () => {
        if (isLogged) {
            setShow(!show)
        } else{
            alert("You must login first")
        }
    };

    const handleChange = (e) => {
        switch (e.target.id) {
            case "date":
                setDate(e.target.value)
                break
            case "time":
                setTime(e.target.value)
                break
            default:
                break
        }
    }

    const getUser = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setLogged(true)
            } else {
                setLogged(false)
            }
        })
    }

    const handleBook = async () => {
        const appointmentSchedule = {
            id: new Date().getTime().toString(),
            doctorId: doctorAppointment.id,
            doctorName: doctorAppointment.doctorName,
            doctorPhoto: doctorAppointment.photo,
            doctorType: doctorAppointment.type,
            patientId: user.id,
            patientName: user.firstName+" "+user.lastName,
            date: date,
            time: time,
            isCancelled: false,
            isCompleted: false
        }
        const otherBooks = await checkBooks()

        if (otherBooks.length === 0) {
            firestore.collection("AppointmentSchedules").doc(appointmentSchedule.id).set(appointmentSchedule)
                .then(() => {
                    alert("Appointment Booked Successfully")
                    toggleDialog()
                })
        } else {
            alert("Choose another time")
        }
    }

    const checkBooks = async () => {
        const bookings = await firestore.collection("AppointmentSchedules")
            .where("doctorId", "==", doctorAppointment.id)
            .where("date", "==", date)
            .where("time", "==", time)
            .get().then((snapshot) => {
                const items = []
                snapshot.forEach((doc) => {
                    const appSched = doc.data()
                    if (appSched.isCancelled !== true){
                        items.push(appSched)
                    }
                })
                return items
            })
        return bookings
    }

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
                            <Form.Control onChange={handleChange} id="date" type="date" placeholder="Enter Date" />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Time</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control onChange={handleChange} id="time" type="time" placeholder="Enter Date" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDialog}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleBook}>
                        Book Appointment
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DoctorAppointment