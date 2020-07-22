
import React from 'react'

import Navbar from './Navbar'
import Demo from './Demo'


const Footer = () => {
    return (
        <footer class="foot mt-auto">
                <div class="inner">
                    <p>Made with <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://github.com/Jugran">@Jugran</a>.</p>
                </div>
        </footer>
    )
}

const Home = () => {

    return (
        <div className="home-container">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">
                <Navbar />
                <Demo />
                <Footer />
            </div>
        </div>
        
    )
    
}

export default Home;