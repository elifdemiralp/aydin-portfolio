import React from 'react'
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import { useState } from 'react';

type Props = {}


export default function Contact({}: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const form = useRef();

    const handleSubmit = (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
      
        const form = event.target;
        const formData = new FormData(form);
      
        const from_name = formData.get('from_name');
        const from_email = formData.get('from_email');
        const message = formData.get('message');
      
        emailjs.send('service_qisqc8r', 'template_xnr7p9g', {from_name, from_email, message}, 'fWNkfjVEZDpLJWLfH')
          .then((response) => {
            console.log('Email successfully sent!');
            form.reset();
            setModalOpen(true);
            setTimeout(() => {
                setModalOpen(false);
            }, 3000)
            
          })
          .catch((error) => {
            console.log('An error occurred:', error);
          });
      }
      
  
    return (
<div>
{modalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-auto" onClick={()=>setModalOpen(false)}>
    <div className="relative w-auto max-w-sm max-h-48 m-6 p-6 bg-gray-100 rounded-lg shadow-xl flex flex-col items-center justify-center">
    <img src="https://cdn-icons-png.flaticon.com/512/1634/1634264.png" className='w-16 h-16'></img>
      <h1 className="text-xl font-bold text-black mb-4">E-mail Successfully Sent</h1>
      <p className="text-black mb-4">Thank you for reaching out!</p>
      <button onClick={() => setModalOpen(false)} className="absolute top-0 right-0 mr-3 mt-1 font-bold text-3xl text-gray-500 hover:text-red-500">
        &times;
      </button>
    </div>
  </div>
)}
    <div className='h-screen overflow-hidden flex relative flex-col text-left max-w-full px-10 justify-evenly mx-auto'>
        <div className="pb-20">
        <h1 className="uppercase tracking-[5px] text-gray-300 text-4xl text-center pt-20 mb-12">Get in Touch</h1>
        <p className='description text-xl text-center hidden md:block mx-20 text-gray-200 pb-4'> If you have any questions about my work or want to collaborate on a project, please don&apos;t hesitate to reach out. </p>
        <div
          
            className="flex justify-center mx-[5vw] mt-8"
        >
            <div className="w-full max-w-[1100px] flex gap-10 flex-col">
            <div className="flex-1 xl:mx-64 lg:mx-32 md:mx-16">
                <form
                method="POST"
                className="flex flex-col gap-2"
                onSubmit={handleSubmit}
                >
                <label htmlFor="name">Your name</label>
                <input
                className='contactInput'
                    type="text"
                    id="name"
                    name="from_name"
                    placeholder="John Doe"
                    required
                    minLength={3}
                />
                <label htmlFor="email">Your email</label>
                <input
                className='contactInput'
                    type="email"
                    id="email"
                    name="from_email"
                    placeholder="johndoe@gmail.com"
                    required
                />
                <label htmlFor="subject">Subject</label>
                <input
                className='contactInput'
                    type="text"
                    id="subject"
                    name="message"
                    placeholder="I want to talk to you"
                    required
                />
                <button type='submit' className="mt-2 py-2 text-black rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#F7AB0A] hover:bg-[#c18401] focus:bg-[#996800]">
                    Send
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
        
    </div>
    </div>
  );
};

