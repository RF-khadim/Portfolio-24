import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <ContactUs />
            <Footer />

        </div>
    )
}

export default Home