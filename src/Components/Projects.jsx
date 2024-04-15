import React from 'react'

const Projects = () => {
    return (
        <div id='projects'>
            <div className='w-full bg-gradient-to-r from-[#202020] to-[#34444c] py-24'>
                <h1 className='text-gradient text-center mb-20 text-2xl border-b-[3px] border-cyan-500 w-fit pb-2 mx-auto md:text-4xl font-bold tracking-widest'>My Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>

                    <div class="relative md:w-[400px] w-[310px] h-[440px] md:h-[520px] bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md flex items-center py-10 flex-col mx-auto overflow-hidden transition-transform transform-gpu hover:scale-105">

                        <div class="absolute inset-0 flex items-center justify-center transition-opacity opacity-100 hover:opacity-0">
                            <h2 class="text-xl font-bold">Front Content</h2>
                        </div>


                        <div class="absolute inset-0 flex justify-center bg-white shadow-cyan-500/30 shadow-md transition-opacity opacity-0 hover:opacity-100">
                            <h2 class="text-xl font-bold">Back Content</h2>
                        </div>
                    </div>

                    <div class="relative md:w-[400px] w-[310px] h-[440px] md:h-[520px] bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md flex items-center py-10 flex-col mx-auto overflow-hidden transition-transform transform-gpu hover:scale-105">

                        <div class="absolute inset-0 flex items-center justify-center transition-opacity opacity-100 hover:opacity-0">
                            <h2 class="text-xl font-bold">Front Content</h2>
                        </div>


                        <div class="absolute inset-0 flex justify-center bg-white shadow-cyan-500/30 shadow-md transition-opacity opacity-0 hover:opacity-100">
                            <h2 class="text-xl font-bold">Back Content</h2>
                        </div>
                    </div>
                    <div class="relative md:w-[400px] w-[310px] h-[440px] md:h-[520px] bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md flex items-center py-10 flex-col mx-auto overflow-hidden transition-transform transform-gpu hover:scale-105">

                        <div class="absolute inset-0 flex items-center justify-center transition-opacity opacity-100 hover:opacity-0">
                            <h2 class="text-xl font-bold">Front Content</h2>
                        </div>


                        <div class="absolute inset-0 flex justify-center bg-white shadow-cyan-500/30 shadow-md transition-opacity opacity-0 hover:opacity-100">
                            <h2 class="text-xl font-bold">Back Content</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects