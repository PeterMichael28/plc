import React from 'react'
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactDiv = () => {
  return (
      <section className=' flex flex-col md:flex-row lg:w-[80%] m-auto md:w-[95%]'>
          <ContactForm />
          <ContactDetails />
    </section>
  )
}

export default ContactDiv