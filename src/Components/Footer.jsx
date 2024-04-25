import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitterX } from 'react-icons/bs'
import { SiFiverr, SiUpwork, SiWhatsapp } from 'react-icons/si'

const email = 'khadimarif52@gmail.com'
const Footer = () => {
    return (
        <div className='w-full h-28 z-10 bg-gradient-to-r from-cyan-800 to-emerald-600 bottom-0 left-0 flex justify-around items-center'>
            <div className='tex-3xl md:text-4xl text-white flex md:gap-4 gap-2 w-auto'>
                <a href="https://www.facebook.com/profile.php?id=100028771893989&mibextid=ZbWKwL">
                    <AiFillFacebook className='hover:bg-white hover:text-cyan-500 rounded-full transition-all duration-300 cursor-pointer' />
                </a>
                <a href="https://github.com/RF-khadim">
                    <AiFillGithub className='hover:bg-white hover:text-cyan-500 rounded-full transition-all duration-300 cursor-pointer' />
                </a>
                <a href="https://www.instagram.com/mohammadarif517?igsh=Yzd1eG5sb3BqM214">
                    <AiFillInstagram className='hover:bg-white hover:text-cyan-500 rounded-full transition-all duration-300 cursor-pointer' />
                </a>
                <a href="https://www.linkedin.com/in/arif-khadim-196492297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <AiFillLinkedin className='hover:bg-white hover:text-cyan-500 rounded-full transition-all duration-300 cursor-pointer' />
                </a>

                
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                    <AiFillGoogleCircle className='hover:bg-white hover:text-cyan-500 rounded-full transition-all duration-300 cursor-pointer' />
                </a>
            </div>
            <div className='flex items-center justify-center text-xs text-center md:text-xl font-extralight text-white'>
                <p>&copy;  2024 ArifKhadim. All rights reserved.</p>
            </div>

            <div className='flex items-center justify-center text-lg md:text-xl font-extralight text-white gap-4'>
                <a href="">
                    <SiFiverr className='text-3xl md:text-6xl cursor-pointer ' />
                </a>
                <a href="">
                    <SiUpwork className='md:text-3xl cursor-pointer text-lg' />
                </a>
                <a href="tel:+923052188928">
                    <SiWhatsapp className='md:text-2xl cursor-pointer text-lg' />
                </a>
            </div>
        </div>
    )
}

export default Footer