// Libraries
import React from 'react'

//Styles
import './Profile.scss'
import {
    Container,
    Image,
    Row,
    Col,
    Nav
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
            <Row >
                //for tab
            </Row>
        </div>
    )
}

export default Profile