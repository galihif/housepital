// Libraries
import React from 'react'

//Styles
import './Home.scss'

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