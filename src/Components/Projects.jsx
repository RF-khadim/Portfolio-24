

import Image1 from '../assets/project-1.jpg';
import Image2 from '../assets/project-2.jpg';
import Image3 from '../assets/project-3.png';

const ProjectCard = ({ frontHeading, backImage, frontText }) => {
    return (
        <div className="relative md:w-[400px] w-[310px] h-[440px] md:h-[520px] bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md flex items-center py-10 flex-col mx-auto overflow-hidden transition-transform transform-gpu hover:scale-105">
            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-100 hover:opacity-0 rounded-md">
                <div className='flex items-center justify-center flex-col gap-8'>
                    <h2 className="text-3xl font-bold text-gradient border-b-2 pb-2 border-cyan-500 w-fit">{frontHeading}</h2>
                <p className='text-sm font-normal text-cyan-500 text-center px-14'>{frontText}</p></div>
                
            </div>
            <div className="absolute inset-0 flex justify-center bg-white shadow-cyan-500/30 shadow-md transition-opacity opacity-0 hover:opacity-100 rounded-md">
                <img className='object-center bg-center bg-no-repeat' src={backImage} alt="Back Content" />
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id='projects'>
            <div className='w-full bg-gradient-to-r from-[#202020] to-[#34444c] py-24'>
                <h1 className='text-gradient text-center mb-20 text-2xl border-b-[3px] border-cyan-500 w-fit pb-2 mx-auto md:text-4xl font-bold tracking-widest'>My Projects</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    <ProjectCard frontHeading="Ikooru" frontText="I had the pleasure of contributing as a frontend developer to Ikooru, a captivating platform crafted with ReactJS and Styled Components. It serves as a vibrant space for sharing innovative business ideas and models across industries." backImage={Image1} />
                    
                    <ProjectCard frontHeading="Go Monday" frontText="I collaborated on Go Monday, a dynamic website constructed using Next.js and enhanced with CSS modules. Together with a seasoned developer, I dedicated my efforts to refining the user interface and experience. This platform offers a wealth of counseling resources, from insightful articles to personalized advice." backImage={Image2} />
                    
                    <ProjectCard frontHeading="ShopIn" frontText="I built an online store for a project assigned by Hadi-E-learning. I used ReactJS, which helps make the website interactive, and Tailwind CSS for styling, making things look nice. Redux Toolkit managed the data, like keeping track of what's in the shopping cart. Yup helped validate form inputs, ensuring people fill out forms correctly. And I used Formik to integrate Yup for form validation. I handled both the frontend and some of the backend work, which allowed me to learn a lot" backImage={Image3} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
