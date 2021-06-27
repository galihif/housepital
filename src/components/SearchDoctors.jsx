//Library
import React from 'react'

//Styles
import './SearchDoctors.scss'//Styles
import { 
    Button,
    Jumbotron,
    Row,
    Col,
    Form,
    FormControl
 } from 'react-bootstrap';

 //Images

const SearchDoctors = () => {
    return (
        <div className="grid p-5 search-doctors-container">
            <p className="text-center">Search Doctors</p>
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
            <Row>
                
            </Row>
        </div>
    )
}

export default SearchDoctors