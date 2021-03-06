//Library
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//Styles

import { 
    Button,
    Image,
    Row,
    Col,
 } from 'react-bootstrap';


const DoctorAppointmentAdmin = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()

    //State
    const [doctorAppointment,] = useState(props.doctorAppointment)

    //Method
    const handleDetail = () => {
        dispatch({ type: "setDoctorAppointment", doctorAppointment: props.doctorAppointment})
        history.push(`/admin/appointmentdetails/${doctorAppointment.id}`)
    }
    return (
        <div>
            <Row className="my-4">
                <Col lg={4} className="d-flex justify-content-center">
                    <Image
                        src={doctorAppointment.photo}
                        rounded
                        className="doc-photo" />
                </Col>
                <Col lg={6} className="py-2 d-flex align-items-center">
                    <div>
                        <h5 className="m-0">{doctorAppointment.doctorName}</h5>
                        <p className="text-muted my-2">{doctorAppointment.type}</p>
                    </div>
                </Col>
                <Col lg={2} className="d-flex align-items-end p-0">
                    <Button onClick={handleDetail} variant="primary mb-2" size="sm">Detail</Button>
                </Col>
            </Row>
        </div>
    )
}

export default DoctorAppointmentAdmin