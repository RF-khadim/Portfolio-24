import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: "",
    email: "",
    contactNum: "",
    message:"",
};

const ContactUs = () => {
    const { values, errors, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values); // Logging form values correctly
        }
    });

    return (
        <div id='contact' className='w-full h-screen bg-gradient-to-r from-[#202020] to-[#34444c] flex items-center py-6 md:py-12 flex-col gap-10'>
            <h1 className='text-gradient text-2xl md:text-4xl font-bold mx-auto w-fit border-cyan-500 border-b-[3px] pb-2 mt-12'>Contact Us</h1>
            <div className='pt-24px w-[400px] md:w-[540px] h-[590px] md:h-[630px] px-12 py-4 bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md rounded-md'>
                <form action='https://getform.io/f/rbeqezlb' className='flex flex-col items-center' onSubmit={handleSubmit}>
                    <input
                        name='name'
                        autoComplete='off'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-cyan-500 border-2 outline-none rounded-md w-full py-1 md:py-2 my-3 pl-3 text-lg text-white'
                        type="text"
                        placeholder='Enter Your name'
                    />
                    <input
                        name='email'
                        autoComplete='off'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-cyan-500 border-2 outline-none rounded-md w-full py-1 md:py-2 my-3 pl-3 text-lg text-white'
                        type="email"
                        placeholder='Enter Your Email'
                    />
                    <input
                        name='contactNum'
                        autoComplete='off'
                        value={values.contactNum}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-cyan-500 border-2 outline-none rounded-md w-full py-1 md:py-2 my-3 pl-3 text-lg text-white'
                        type="text"
                        placeholder='Enter Your Contact Number'
                    />
                    <textarea value={values.text}
                        name="message"
                        cols="30"
                        rows="10"
                        className='bg-transparent border-cyan-500 border-2 outline-none rounded-md py-1 md:py-2 my-3 pl-3 text-lg text-white resize-none w-max'
                    ></textarea>
                    <button
                        type='submit'
                        className='bg-cyan-500 w-full rounded-full py-2 my-3 hover:bg-gradient-to-t from-cyan-600/60  to-emerald-900/60 text-white font-semibold transition duration-300 ease-in-out md:text-lg text-base'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
