// Libraries
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//Styles
import './Profile.scss'
import {
    Container,
    Image,
    Row,
    Col,
    Tab,
    Tabs,
    Button
} from 'react-bootstrap';

//image
import card_img from '../assets/card_img.png'
import AppointmentSchedule from '../components/AppointmentSchedule';

//Components

const Profile = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    console.log(state)
    //State
    const [appointmentSchedules, setAppointmentSchedules] = useState([1,2,3])
    
    return(
        <div className="">
            <Container className="profile-container my-5 mx-5 mx-lg-auto" style={{ width: "40em", height: "9em" }}>
                <Row>
                    <Col lg={3} xs={4} className="p-0">
                        <Image
                            src={card_img}
                            rounded
                            className="user-photo" />
                    </Col>
                    <Col lg={9} xs={8} className="p-4">
                        <h4>Elizabeth Olsen</h4>
                        <p className="text-muted">@eliolsen24</p>
                        <p>29 years old</p>
                    </Col>
                </Row>
            </Container>
            
            <Container className="my-5 mx-5 mx-lg-auto" style={{ width: "40em" }}>
                <Row>
                    <Col className="p-0">
                        <Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
                            <Tab eventKey="appointments" title="Appointments">
                                <div className="tab-container p-5">
                                    {
                                        appointmentSchedules.map((key,appointmentSchedule) => {
                                            return key === appointmentSchedules.length ? (
                                                <AppointmentSchedule/>
                                            ) : (
                                                <div>
                                                    <AppointmentSchedule/>
                                                    <hr/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Tab>
                            <Tab eventKey="settings" title="Settings">
                                <div className="tab-container">
                                    dfdf
                                </div>
                            </Tab>
                        </Tabs></Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Profile