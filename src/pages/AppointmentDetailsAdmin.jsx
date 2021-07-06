// Libraries
import React, { useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector,  } from 'react-redux'

//Config
import { firestore, storage } from '../config/firebase'

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

//Components

const AppointmentDetailsAdmin = () => {
    const state = useSelector((state) => state)
    const history = useHistory()
    const {id} = useParams()
    
    //State
    const [doctorAppointment, ] = useState(state.doctorAppointment)
    const [appointmentSchedules, setAppointmentSchedules] = useState([])
    const [show, setShow] = useState(false);
    const [doctorName, setDoctorName] = useState(doctorAppointment.doctorName);
    const [type, setType] = useState(doctorAppointment.type);
    const [photo, setPhoto] = useState(doctorAppointment.photo);

    //method
    useEffect(() => {
        getAppSched()
    })

    const toggleDialog = () => setShow(!show);

    const getAppSched = () => {
        firestore.collection("AppointmentSchedules")
            .where("doctorId", "==", id)
            .get().then((snapshot) => {
                const items = []
                snapshot.forEach((doc) => {
                    items.push(doc.data())
                })
                setAppointmentSchedules(items)
            })
    }

    const handleChange = (e) => {
        switch (e.target.id) {
            case "doctorName":
                setDoctorName(e.target.value)
                break
            case "type":
                setType(e.target.value)
                break
            default:
                break
        }
    }
    const handleChangePhoto = (e) => {
        const uploadPhoto = e.target.files[0]
        const path = `doctorAppointments/${id}`
        storage.ref(path)
            .put(uploadPhoto)
            .then((snapshot) => {
                storage.ref(path)
                    .getDownloadURL()
                    .then(URL => {
                        setPhoto(URL)
                    })
            })
        
        
    }
    const handleDeletePhoto = (e) => {
        setPhoto()
    }

    const handleSave = () => {
        const newDoctorAppointment = {
            id: id,
            doctorName: doctorName,
            type: type,
            photo: photo
        }
        firestore.collection("DoctorAppointments").doc(id).set(newDoctorAppointment)
            .then(() => {
                history.push('/admin')
            })
    }

    const handleDeleteDoc = () => {
        firestore.collection("DoctorAppointments").doc(id).delete()
            .then(() => {
                history.push('/admin')
            })
    }
    
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
                                            <Form.Control onChange={handleChange} id="doctorName" type="text" placeholder="Enter Name" value={doctorName} />
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col lg={4}>
                                            <p>Type</p>
                                        </Col>
                                        <Col lg={8}>
                                            <Form.Control onChange={handleChange} id="type" type="text" placeholder="Enter Type" value={type} />
                                        </Col>
                                    </Row>
                                    <Row className="my-2">
                                        <Col lg={4}>
                                            <p>Photo</p>
                                        </Col>
                                        <Col lg={8}>
                                            {
                                                typeof photo === "undefined" ? (
                                                    <Form.Control onChange={handleChangePhoto} type="file" placeholder="Upload Photo" />
                                                ) : (
                                                    <div>
                                                        <Image
                                                            src={photo}
                                                            rounded
                                                            className="doc-photo mt-2" />
                                                        <Button onClick={handleDeletePhoto} variant="danger mx-5" type="submit">
                                                            Delete Photo
                                                        </Button>
                                                    </div>
                                                )
                                            }
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col className="d-inline-flex justify-content-end">
                                            <Button onClick={toggleDialog} variant="danger mx-3" type="submit">
                                                Delete
                                            </Button>
                                            <Button onClick={handleSave} variant="primary" type="submit">
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
                                            {
                                                appointmentSchedules.length === 0 ? (
                                                    <tr>
                                                        <td colSpan="3" className="text-center">This doctor have no appointment schedule</td>
                                                    </tr>
                                                ) :null
                                            }
                                            {
                                                appointmentSchedules.map((app) => {
                                                    return(
                                                        <tr>
                                                            <td>{app.patientName}</td>
                                                            <td>{app.date} {app.tine}</td>
                                                            <td>
                                                                {
                                                                    app.isCancelled ? (
                                                                        <Badge variant="danger">Cancelled</Badge>
                                                                    ) : app.isCompleted ? (
                                                                        <Badge variant="success">Completed</Badge>
                                                                    ) : (
                                                                        <Badge variant="secondary">Not Completed</Badge>
                                                                    )
                                                                }
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab>
                        </Tabs></Col>
                </Row>
            </Container>

            <Modal show={show} onHide={toggleDialog} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Delete Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-lg-4">
                    Are you sure want to delete this doctor appointment?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDialog}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDeleteDoc}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default AppointmentDetailsAdmin