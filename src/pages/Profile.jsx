// Libraries
import React from 'react'

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

const Profile  = () => {
    //State
    
    
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
                    <Col>
                        <Tabs defaultActiveKey="appointments" id="uncontrolled-tab-example">
                            <Tab eventKey="appointments" title="Appointments">
                                <div className="tab-container p-5">
                                    <AppointmentSchedule/>
                                    <AppointmentSchedule/>
                                    <AppointmentSchedule/>
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