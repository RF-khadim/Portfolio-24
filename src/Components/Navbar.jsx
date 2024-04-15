import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="w-full z-40 absolute top-0">
            <div className='bg-gradient-to-r from-cyan-800 to-emerald-600 w-full h-20 fixed'>
                <div className='w-full px-4 lg:px-10 h-full md:px-7 flex items-center justify-between text-white'>
                    <h1 className='text-2xl font-bold'>Mohammad Arif</h1>
                    <ul className='justify-center items-center lg:gap-10 md:gap-7 pr-10 font-medium text-base sm:hidden md:flex hidden'>

                        <a className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300' href="#hero">
                            Home

                        </a>


                        <a className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300' href="#about">About</a>


                        <a className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300' href="#projects">Projects</a>

                        <a className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300' href="#contact">Contact</a>

                    </ul>
                    <div onClick={handleNav} className='md:hidden sm:block'>
                        {nav ? <AiOutlineMenu className="text-2xl font-extrabold" /> : <AiOutlineClose className="text-2xl font-extrabold" />}
                    </div>


                </div>
            </div>
            <div className={`top-0 left-0 w-[60%] bg-gradient-to-t from-cyan-800 to-emerald-600  flex items-center h-[100%] text-white flex-col md:hidden sm:flex transition-all duration-300 fixed ${nav ? 'left-[-100%]' : ''}`}>
                <h1 className='text-2xl font-bold mt-20'>Mohammad Arif</h1>
                <div className='flex justify-center items-center font-medium flex-col mt-20 text-lg gap-6'>

                    <div><a href="hero" className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300 mt-4 px-7'>Home</a>
                    </div>
                    <div>
                        <a href="#about" className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300  mt-4 px-7'>About</a>
                    </div>
                    <div>
                        <a href="#projects" className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300  mt-4 px-7'>Projects</a>
                    </div>
                    <div>
                        <a href="#contact" className='w-[100px] py-2 hover:bg-emerald-400
                     text-center rounded transition-all ease-in-out duration-300  mt-4 px-7'>Contact</a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar