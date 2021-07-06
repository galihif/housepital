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
    const [keyword, setKeyword] = useState()
    const [keywordSearch, setKeywordSearch] = useState()

    //Method
    useEffect(() => {
        getDoctorAppointments()
    },[])

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleChange = (e) => {
        setKeyword(capitalizeFirstLetter(e.target.value))
    }

    const handleSearch = () => {
        // setKeywordSearch(keyword)
        console.log(keyword, typeof keyword !== "undefined")
        getDoctorAppointments()
    }

    const getDoctorAppointments = () => {
        if (typeof keyword !== "undefined" && keyword !== ""){
            firestore.collection("DoctorAppointments")
                .onSnapshot((snapshot) => {
                    const items = []
                    snapshot.forEach((doc) => {
                        const docApp = doc.data()
                        const docName = docApp.doctorName
                        const docType = docApp.type
                        
                        if (docName.includes(keyword) || docType.includes(keyword)) {
                            console.log(docName,"|", docType,"|", keyword)
                            items.push(docApp)
                        }
                        // if (docName.includes(keywordSearch) || docType.includes(keywordSearch)) {
                        //     items.push(docApp)
                        // }
                    })
                    setDoctorAppointments(items)
                })
        } else {
            firestore.collection("DoctorAppointments")
                .onSnapshot((snapshot) => {
                    const items = []
                    snapshot.forEach((doc) => {
                        console.log("s")
                        items.push(doc.data())
                    })
                    setDoctorAppointments(items)
                })
        }
        // firestore.collection("DoctorAppointments")
        //     .onSnapshot((snapshot) => {
        //         const items = []
        //         snapshot.forEach((doc) => {
        //             const docApp = doc.data()
        //             const docName = docApp.doctorName
        //             const docType = docApp.type
        //             console.log(keywordSearch, docName, docType)
        //             // if (docName.includes(keywordSearch) || docType.includes(keywordSearch)) {
        //                 items.push(docApp)
        //             // }
        //         })
        //         console.log(items)
        //         setDoctorAppointments(items)
        //     })
    }

    return (
        <div className="grid p-5 search-doctors-container">
            <p className="text-center title">Doctor List</p>
            {/* <Row className="d-flex my-5 justify-content-center">
                <Col lg={4}>
                    <Form className="d-flex">
                        <FormControl
                            onChange={handleChange}
                            type="search"
                            placeholder="Search name, specialization, etc"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button onClick={handleSearch} variant="primary">Search</Button>
                    </Form>
                </Col>
            </Row> */}
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