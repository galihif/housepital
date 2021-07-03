// Libraries
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

//Config
import { auth, firestore, storage } from '../config/firebase'

//Styles
import './Admin.scss'
import {
    Container,
    Alert,
    Row,
    Col,
    Modal,
    Spinner,
    Form,
    Button
} from 'react-bootstrap';

//image
import DoctorAppointmentAdmin from '../components/DoctorAppointmentAdmin';

//Components

const Admin = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    
    //State
    const [doctorAppointments, setDoctorAppointments] = useState([])
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(new Date().getTime().toString());
    const [doctorName, setDoctorName] = useState("");
    const [type, setType] = useState("");
    const [photo, setPhoto] = useState("");

    //method
    useEffect(() => {
        getDoctorAppointments()
    })

    const toggleDialog = () => setShow(!show);

    const getDoctorAppointments = () => {
        firestore.collection("DoctorAppointments")
            .onSnapshot((snapshot) => {
                const items = []
                snapshot.forEach((doc) => {
                    items.push(doc.data())
                })
                setDoctorAppointments(items)
            })
    }

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                history.push("/login")
                dispatch({ type: "LOGOUT" })
            })
    }

    const handleChange = (e) => {
        switch(e.target.id){
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
        setPhoto(uploadPhoto)
        
    }

    const handleAdd = () => {
        setLoading(true)
        const doctorAppointment = {
            id: id,
            doctorName: doctorName,
            type: type,
            photo: photo
        }
        const path = `doctorAppointments/${id}`
        storage.ref(path)
            .put(photo)
            .then((snapshot) => {
                storage.ref(path)
                    .getDownloadURL()
                    .then(URL => {
                        setPhoto(URL)
                        doctorAppointment.photo = URL
                        firestore.collection("DoctorAppointments").doc(id).set(doctorAppointment)
                            .then(() => {
                                setLoading(false)
                                setShowAlert(true)
                                toggleDialog()
                            })
                    })
            })
    }
    
    return(
        <div className="">
            <Container className="mx-5 my-3 mt-5 mx-lg-auto" style={{ width: "40em" }}>
                <p className="text-center admin-title">Administrator</p>
                <Row className="d-flex justify-content-between m-0">
                    <Button variant="primary mb-2" size="sm" onClick={toggleDialog}>Add Appointment</Button>
                    <Button variant="danger mb-2" size="sm" onClick={handleLogout}>Logout</Button>
                </Row>
            </Container>
            
            <Container className="mb-5 mx-5 mx-lg-auto" style={{ width: "40em" }}>
                <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>
                    <p className="m-0">
                        Appointment added!
                    </p>
                </Alert>
                <div className="admin-app-container p-5">
                    {
                        doctorAppointments.length === 0 ? (
                            <div className="p-5">
                                <p className="text-center">You have no appointment</p>
                            </div>
                        ) : null
                    }
                    {
                        doctorAppointments.map((doc,key) => {
                            return key === doctorAppointments.length ? (
                                <DoctorAppointmentAdmin 
                                    doctorName={doc.doctorName}
                                    type={doc.type}
                                    photo={doc.photo}/>
                            ) : (
                                <div>
                                    <DoctorAppointmentAdmin
                                        doctorName={doc.doctorName}
                                        type={doc.type}
                                        photo={doc.photo}/>
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
                            <Form.Control onChange={handleChange} id="doctorName" type="text" placeholder="Enter Name" />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Type</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control onChange={handleChange} id="type" type="text" placeholder="Enter Type" />
                        </Col>
                    </Row>
                    <Row className="my-2">
                        <Col lg={4}>
                            <p>Photo</p>
                        </Col>
                        <Col lg={8}>
                            <Form.Control onChange={handleChangePhoto} type="file" placeholder="Upload Photo" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDialog}>
                        Cancel
                    </Button>
                    {
                        loading ? (
                            <Button variant="primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Loading...
                            </Button>
                        ) : (
                            <Button variant="primary" onClick={handleAdd}>
                                Add
                            </Button>
                        )
                    }
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}

export default Admin