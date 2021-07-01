//Library
import React from 'react'

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
                <Col lg={3} className="d-flex justify-content-center mb-3">
                    <DoctorAppointment
                        doctorName="Bruce Banner"
                        type="Gamma Scientist"/>
                </Col>
                <Col lg={3} className="d-flex justify-content-center mb-3">
                    <DoctorAppointment
                        doctorName="Natasha Romanoff"
                        type="Special Spy"/>
                </Col>
                <Col lg={3} className="d-flex justify-content-center mb-3">
                    <DoctorAppointment
                        doctorName="Dr. Stephen Strange"
                        type="Medical Check Up"/>
                </Col>
                <Col lg={3} className="d-flex justify-content-center mb-3">
                    <DoctorAppointment
                        doctorName="Dr. Stephen Strange"
                        type="Neurosurgeon Specialist"/>
                </Col>
            </Row>
        </div>
    )
}

export default SearchDoctors