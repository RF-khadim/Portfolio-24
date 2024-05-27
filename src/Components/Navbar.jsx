import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setNav(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleNavToggle = () => {
        setNav(!nav);
    };

    const handleLinkClick = () => {
        setNav(false); 
    };

    return (
        <div className="z-40 absolute top-0">
            <div className='bg-gradient-to-r from-cyan-800 to-emerald-600 w-full h-20 fixed px-10'>
                <div className='lg:px-10 h-full md:px-2 flex items-center justify-between text-white'>
                    <h1 className='text-2xl font-bold'>Mohammad Arif</h1>
                    <ul className='justify-center items-center lg:gap-10 md:gap-7 pr-10 font-medium text-base sm:hidden md:flex hidden'>
                        <li><a  className='w-[100px] px-8 py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300' href="#hero">Home</a></li>
                        <li><a  className='w-[100px] px-8 py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300' href="#about">About</a></li>
                        <li><a  className='w-[100px] px-8 py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300' href="#projects">Projects</a></li>
                        <li><a  className='w-[100px]  px-8 py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300' href="#contact">Contact</a></li>
                    </ul>
                    <div onClick={handleNavToggle} className='md:hidden sm:block'>
                        {nav ?   <AiOutlineClose className="text-2xl font-extrabold" />:<AiOutlineMenu className="text-2xl font-extrabold" />}
                    </div>
                </div>
            </div>
            <div ref={navRef} className={`top-0 left-0 w-[60%] bg-gradient-to-t from-cyan-800 to-emerald-600  flex items-center h-[100%] text-white flex-col md:hidden sm:flex transition-all duration-300 fixed ${nav ? 'left-0' : '-left-full'}`}>
                <h1 className='text-2xl font-bold mt-20'>Mohammad Arif</h1>
                <div className='flex justify-center items-center font-medium flex-col mt-20 text-lg gap-6'>
                    <div><a onClick={handleLinkClick} href="#hero" className='w-[100px] py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300 mt-4 px-7'>Home</a></div>
                    <div><a onClick={handleLinkClick} href="#about" className='w-[100px] py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300  mt-4 px-7'>About</a></div>
                    <div><a onClick={handleLinkClick} href="#projects" className='w-[100px] py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300  mt-4 px-7'>Projects</a></div>
                    <div><a onClick={handleLinkClick} href="#contact" className='w-[100px] py-2 hover:bg-emerald-400 text-center rounded transition-all ease-in-out duration-300  mt-4 px-7'>Contact</a></div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
