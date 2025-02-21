"use client"
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend for processing
    console.log('Form Data: ', formData);
  };

  return (
    <div className='min-h-screen'>
      <header className=''>
        <div className='flex justify-end text-7xl md:text-10xl border-b-2 border-foreground'>
          <div className='flex-1'></div>
          <h1 className='flex flex-col border-l-2 border-l-foreground p-5 md:p-5'>CONTACT</h1>
        </div>
      </header>
      <div className='flex flex-col md:flex-row md:justify-between p-5'>
        <div className='flex flex-col mb-0 md:mb-0 '>
          <h2 className='text-7xl mb-4'>Get in touch</h2>
          <div className='text-3xl md:text-5xl'>email: <a href="mailto:justinguerrerowork@gmail.com">justinguerrerowork@gmail.com</a></div>
          <div className='md:hidden font-display text-7xl text-center mt-10 mb-10'>OR</div>
        </div>
        <div className='md:w-1/2'>
          <h3 className='text-3xl mb-4'>Make an appointment</h3>
          <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
              className='border-2 border-foreground p-2'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              className='border-2 border-foreground p-2'
              required
            />
            <input
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
              placeholder='Phone'
              className='border-2 border-foreground p-2'
              required
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Message'
              className='border-2 border-foreground p-2'
              required
            />
            <button type='submit' className='bg-foreground border-2 border-foreground text-background p-2 text-3xl hover:bg-background hover:text-foreground'>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}
