import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const onSubmit = (templateParams) => {

        emailjs
            .send('service_g32vain', 'template_eu7afqn', templateParams, {
                publicKey: 'WcWGYP5jeps8-25-W',
            })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.success('Message sent successfully');
                    reset();
                },
                (err) => {
                    console.log('FAILED...', err);
                    toast.error('Failed to send message');
                    reset();
                },
            );
    }


    return (
        <div name="contact" className="w-full bg-gradient-to-b from-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto p-4">
                <div>
                    <p className="text-4xl font-semibold border-b-4 border-gray-500 inline">Contact</p>
                    <p className="mt-4 text-xl">Submit the form below to get in touch with me</p>
                </div>
                <div className="w-full flex items-center mt-12 justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3 md:w-1/2">
                        <div>
                            <input
                                type="text"
                                name='name'
                                placeholder='Enter your name'
                                className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                                {
                                ...register('name', { required: true })
                                }
                            />
                            {
                                errors.name && (
                                    <span className="text-red-500">Name field is required *</span>
                                )
                            }
                        </div>
                        <div>
                            <input
                                type="email"
                                name='email'
                                placeholder='Enter your email'
                                className="p-2 w-full bg-transparent border-2 rounded-md text-white focus:outline-none"
                                {
                                ...register('email', { required: true })
                                }
                            />
                            {
                                errors.email && (
                                    <span className="text-red-500">Email field is required *</span>
                                )
                            }
                        </div>
                        <div>
                            <textarea
                                name="message"
                                id="message"
                                placeholder='Enter your message'
                                rows={5}
                                className="w-full p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                                {
                                ...register('message', { required: true })
                                }
                            ></textarea>
                            {
                                errors.message && (
                                    <span className="text-red-500">Message field is required *</span>
                                )
                            }
                        </div>
                        <button
                            className="w-full text-center bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 mx-auto flex items-center justify-center rounded-md hover:scale-110 duration-200"
                        >
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact