
import React from 'react'

import Demo from '../feed/Demo'
import Navbar from './Navbar'
import Footer from './Footer'



const Home = () => {

    return (
        <div className="home-container page-container">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
                <Navbar />
                <Demo />
                <Footer />
            </div>
        </div>
        
    )
    
}

export default Home;