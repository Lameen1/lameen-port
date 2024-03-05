
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
        .sendForm(
        'service_6sq6dk6',
        'template_kkjgjvj', 
        form.current!,
        {publicKey: 'ddGZEOpARib76JcXL',})
        .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
        form.current?.reset()
    };
    

    return (
        <form ref={form} onSubmit={sendEmail} className="h-1/2 w-full">
            <div className="flex flex-col mb-4">
                <label className='text-red mb-2 font-semibold'>Name</label>
                <input type="text" name="user_name" className="border border-gray-500 rounded h-8 w-full" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold">Email</label>
                <input className="border border-gray-500 rounded h-8 w-full" type="email" name="user_email" />
            </div>
            <div className="flex flex-col mb-4">
                <label className="mb-2 font-semibold">Message</label>
                <textarea className="h-28 rounded border border-gray-500" name="user_message" />
            </div>
            <input className="bg-yellow-400 flex justify-center items-center h-8 w-full rounded font-bold" type="submit" value="Send" />
        </form>
        );
    };
    export default Contact