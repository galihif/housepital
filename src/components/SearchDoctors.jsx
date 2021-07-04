//Libraries
import React, { useState, useEffect } from 'react'

//Config
import { auth, firestore, storage } from '../config/firebase'

//Styles
import './SearchDoctors.scss'//Styles
import { 
    Button,
    Row,
    Col,
    Form,
    FormControl
 } from 'react-bootstrap';
import DoctorAppointment from './DoctorAppointment';


const SearchDoctors = () => {
    //State
    const [doctorAppointments, setDoctorAppointments] = useState([])

    //Method
    useEffect(() => {
        getDoctorAppointments()
    })

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

    return (
        <div className="grid p-5 search-doctors-container">
            <p className="text-center title">Search Doctors</p>
            <Row className="d-flex my-5 justify-content-center">
                <Col lg={4}>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search name, specialization, etc"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="primary">Search</Button>
                    </Form>
                </Col>
            </Row>
            <Row className="px-5 d-flex justify-content-center">
                {
                    doctorAppointments.map((doc) => {
                        return (
                            <Col lg={3} className="d-flex justify-content-center mb-3">
                                <DoctorAppointment
                                    doctorAppointment={doc} />
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default SearchDoctors