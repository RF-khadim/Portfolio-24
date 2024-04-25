import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'; // Import yup
import emailjs from 'emailjs-com';

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

const initialValues = {
    name: "",
    email: "",
    contactNum: "",
    message: "",
};

const ContactUs = () => {
    const formRef = useRef(null);

    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        contactNum: yup.number().required('Contact Number is required'),
        message: yup.string().required('Message is required'),
    });


    const { values, errors, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            emailjs.send(serviceID, templateID, {
                from_name: values.name,
                message: values.message,
                email: values.email,
                to_name: "Arif Khadim"
            }, publicKey)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);

                },
                    (error) => {
                        console.log('FAILED...', error);
                    });
        }
    });

    return (
        <div id='contact' className='w-full h-screen bg-gradient-to-r from-[#202020] to-[#34444c] flex items-center py-6 md:py-12 flex-col gap-10'>
            <h1 className='text-gradient text-2xl md:text-4xl font-bold mx-auto w-fit border-cyan-500 border-b-[3px] pb-2 mt-12'>Contact Us</h1>
            <div className='pt-24px w-[340px] md:w-[540px] h-[590px] md:h-[630px] px-12 py-4 bg-gradient-to-b from-cyan-800/10 to-emerald-600/60 shadow-cyan-500/30 shadow-md rounded-md'>
                <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col items-center' id='contact-form'>
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
                    {errors.name && <div className="text-cyan-500">{errors.name}</div>}
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
                    {errors.email && <div className="text-cyan-500">{errors.email}</div>}
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
                    {errors.contactNum && <div className="text-cyan-500">{errors.contactNum}</div>}
                    <textarea
                        name="message"
                        value={values.message}
                        cols={5}
                        rows={5}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='bg-transparent border-cyan-500 border-2 outline-none rounded-md py-1 md:py-2 my-3 pl-3 text-lg text-white resize-none w-full'

                        placeholder='Enter Your Message'
                    ></textarea>
                    {errors.message && <div className="text-cyan-500">{errors.message}</div>}
                    <button
                        // disabled={isSubmitting}
                        type='submit'
                        className='bg-cyan-500 w-full rounded-full py-2 my-3 hover:bg-gradient-to-t from-cyan-600/60  to-emerald-900/60 text-white font-semibold transition duration-300 ease-in-out md:text-lg text-base'
                    >
                        {/* {isSubmitting ? "Please wait" : "Send Email"} */}
                        Send Email
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
