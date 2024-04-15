import React from 'react'
import { BiSolidSchool } from 'react-icons/bi'
import { FaSchool, FaUniversity } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { GrReactjs } from 'react-icons/gr'
import { LiaUniversitySolid } from 'react-icons/lia'
import { SiCss3, SiHtml5, SiJavascript, SiRedux, SiTailwindcss } from 'react-icons/si'

const About = () => {
    return (
        <div id='about' className='w-full h-auto bg-gradient-to-r from-[#202020] to-[#34444c] py-10'>
            <h1 className='text-gradient border-b-[3px] w-fit m-auto mb-10 text-2xl border-cyan-500 md:text-4xl font-bold tracking-widest pb-1 mt-20'>About Me</h1>
            <div className=' w-full h-auto mt-6 md:mt-12 flex items-center justify-center flex-col md:flex-row gap-8 md:gap-14'>

                <div className=' md:w-[450px] w-80 h-[500px] md:h-[600px] bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md flex items-center py-10 flex-col  '>

                    <h1 className='text-white text-2xl font-semibold border-b-2 border-emerald-400 tracking-widest'>Skills</h1>
                    <div className='flex flex-col w-full h-auto text-cyan-500 gap-4 lg:gap-6 text-2xl md:text-4xl px-8 mt-10'>
                        <div className='flex items-center'>
                            <SiHtml5 />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Proeficient in creating wellstructure and semantic makeup build the foundation of web projects.</p>
                        </div>

                        <div className='flex items-center'>
                            <SiCss3 />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Skilled in designing visually appealing and responsive interfaces, ensuring a seamless user experience.</p>
                        </div>

                        <div className='flex items-center'>
                            <SiJavascript />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Expertise in leveraging Javascript to enhance website interactivity and deliver dynamic user interfaces.</p>
                        </div>

                        <div className='flex items-center'>
                            <GrReactjs />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Experienced in developing robust and scalable web applications using the React library.</p>
                        </div>

                        <div className='flex items-center'>
                            <SiTailwindcss />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Efficiently utilized Tailwind CSS for streamlined styling enhancing the efficiency of the development process.</p>
                        </div>

                        <div className='flex items-center'>
                            <SiRedux />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Proficient with Redux Toolkit for efficient state management, enhancing application performance.</p>
                        </div>
                    </div>

                </div>
                <div className='md:w-[450px] w-80 h-[500px] md:h-[600px] bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md flex items-center py-10 flex-col  '>
                    <h1 className='text-white text-2xl font-semibold border-b-2 border-emerald-400 tracking-widest'>Education</h1>

                    <div className='flex flex-col w-full h-auto text-cyan-500 gap-4 lg:gap-6 text-2xl md:text-4xl px-8 mt-10'>

                        <div className='flex items-center'>
                            <FaSchool />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'> The Asian school Karachi (2015).</p>
                        </div>

                        <div className='flex items-center'>
                            <BiSolidSchool />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Johar Degree College Karachi (2018).</p>
                        </div>

                        <div className='flex items-center'>
                            <LiaUniversitySolid />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'> University of Karachi (BA, 2021).</p>
                        </div>

                        <div className='flex items-center'>
                            <FaUniversity />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'> University of Karachi (MA, 2022).</p>
                        </div>

                        <div className='flex items-center'>
                            <GiArtificialIntelligence />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Learning AI under the Governer Karachi Kamran Tessori's Inititative.</p>
                        </div>

                        <div className='flex items-center'>
                            <GrReactjs />
                            <p className='pl-3 md:pl-5 text-xs md:text-sm'>Learning ReactJs from the Hadi-E-Learning platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About