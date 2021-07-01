//Library
import React,{useState} from 'react'

//Styles

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

const DoctorAppointmentAdmin = (props) => {
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
                    </div>
                </Col>
                <Col lg={2} className="d-flex align-items-end p-0">
                    <Button variant="primary mb-2" size="sm" href="/admin/appointmentdetails">Detail</Button>
                </Col>
            </Row>
        </div>
    )
}

export default DoctorAppointmentAdmin