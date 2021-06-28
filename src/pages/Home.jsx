// Libraries
import React from 'react'

//Styles
import './Home.scss'
import {
    Button,
    Jumbotron,
    Form,
    Row,
    Col,
    FormControl
} from 'react-bootstrap';

//Components
import Header from '../components/Header';
import SearchDoctors from '../components/SearchDoctors';

const Home  = () => {
    return(
        <div>
            <Header/>
            <SearchDoctors/>
        </div>
    )
}

export default Home