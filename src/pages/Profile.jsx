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

//Components

const Profile  = () => {
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
                                    <Row>
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
                                                <p className="m-0">2021-01-01 19:00</p>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="d-flex align-items-end p-0">
                                            <Button variant="danger mb-2" size="sm">Cancel</Button>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
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
                                                <p className="m-0">2021-01-01 19:00</p>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="d-flex align-items-end p-0">
                                            <Button variant="danger mb-2" size="sm">Cancel</Button>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
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
                                                <p className="m-0">2021-01-01 19:00</p>
                                            </div>
                                        </Col>
                                        <Col lg={2} className="d-flex align-items-end p-0">
                                            <Button variant="danger mb-2" size="sm">Cancel</Button>
                                        </Col>
                                    </Row>
                                    <hr/>
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