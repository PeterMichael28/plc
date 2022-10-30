import React from 'react'
import ContactBanner from '../components/ContactBanner';
import ContactDiv from '../components/ContactDiv';

const Contact = () => {
  const text = "Students Satisfaction is our major concern."
  

  return (
      <main>
          <ContactBanner text={ text } classProp="-top-6" />
          <ContactDiv />
    </main>
  )
}

export default Contact