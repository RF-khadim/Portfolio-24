import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import MyImage from '../assets/MyImage-1.png'
import MyCV from '../assets/MyCV.pdf'
import { BsTwitterX } from 'react-icons/bs'
const email= 'khadimarif52@gmail.com'

const Hero = () => {
    return (
        <div id='hero' className='w-full h-auto md:h-full  bg-gradient-to-r from-[#202020] to-[#34444c]'>
            <div className='md:mt-10 w-full h-screen flex md:justify-around  items-center px-10 md:px-20 gap-4 flex-col md:flex-row '>

                <div className='h-auto flex items-center justify-center flex-col' >
                    <div className='flex flex-col text-white md:text-2xl sm:text-xl  gap-3 font-bold text-center mt-28'>
                        <span >Hi it's Me </span>
                        <h1 className='text-gradient md:text-5xl sm:text-3xl'>Muhammad Arif</h1>
                    </div>
                    <h1 className='text-white text-center md:text-4xl text-2xl mt-6 '>
                        <TypeAnimation
                            sequence={[
                                'Frontend Web Developer',
                                2000,
                                'ReactJs Developer',
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        /></h1>
                    <div className=' flex items-center justify-evenly w-72 md:w-[360px] mt-8 text-2xl md:text-4xl text-cyan-500'>
                        <a href="https://www.facebook.com/profile.php?id=100028771893989&mibextid=ZbWKwL">
                            <AiFillFacebook className='hover:text-white transition-all ease-in-out duration-300 cursor-pointer' /></a>
                        <a href="https://github.com/RF-khadim">
                            <AiFillGithub className='hover:text-white transition-all ease-in-out duration-300 cursor-pointer' /></a>
                        <a href="https://www.instagram.com/mohammadarif517?igsh=Yzd1eG5sb3BqM214">
                            <AiFillInstagram className='hover:text-white transition-all ease-in-out duration-300 cursor-pointer' /></a>
                        <a href="https://www.linkedin.com/in/arif-khadim-196492297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <AiFillLinkedin className='hover:text-white transition-all ease-in-out duration-300 cursor-pointer' /></a>
                        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                            <AiFillGoogleCircle className='hover:text-white transition-all ease-in-out duration-300 cursor-pointer' /></a>

                        
                    </div>

                    <a href={MyCV} download="resume.pdf" className='bg-gradient-to-r from-cyan-800 to-emerald-600 mt-4 md:mt-12 px-16 md:px-20 md:py-2 text-white font-semibold text-lg rounded-full py-1 md:text-xl cursor-pointer' >Download CV</a>


                </div>
                <div >
                    <div className='flex flex-col text-white gap-3 text-center'>
                        <img className='h-auto w-80 md:w-[450px]' src={MyImage} alt="Myimage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero