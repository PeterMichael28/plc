import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_478smyu', 'template_8xaw1v5', form.current, 'vqrP8pcEfFpj4-p_V')
      .then((result) => {
        alert( "message sent successfully" );
        form.current.reset()
      }, (error) => {
        alert("failed to send message");
      });
  };



 return (
  <div className="w-[95%] mx-auto p-4 px-5 lg:px-5 md:w-[50%] lg:w-[42%] bg-white shadow-md shadow-[#efe8e8d1] relative -top-12 rounded-md lg:-top-24 pb-10">
   <h1 className="text-[1.3rem] lg:text-[1.6rem] font-bold text-[#FF6600] ">
    Reach out to us
   </h1>
   <p className="text-sm font-semibold text-[#5E6282] mb-6">
    Feel free, tell us about your anything you want to
    enquire about the training or choosing a career path.
   </p>
   <form
    className="flex flex-col mt-4 lg:mt-0"
    ref={form}
    onSubmit={sendEmail}
   >
    <input
     type="text"
     placeholder="Name"
     className="px-4 py-2 bg-[#f2f2f2] placeholder:text-sm placeholder:font-semibold rounded-sm mb-3"
     name="user_name"
     required
    />
    <input
     type="email"
     placeholder="Email"
     className="px-4 py-2 bg-[#f2f2f2] placeholder:text-sm placeholder:font-semibold rounded-sm mb-3"
         name="user_email"
         required
    />
    <input
     type="tel"
     placeholder="Phone Number"
     className="px-4 py-2 bg-[#f2f2f2] placeholder:text-sm placeholder:font-semibold rounded-sm mb-3"
         name="user_number"
         required
    />
    <textarea
     id=""
     cols="30"
     rows="6"
     className="border bg-[#f2f2f2] px-4 py-2 placeholder:text-base placeholder:font-semibold rounded-sm mb-2"
     placeholder="Message"
     name="message"
    ></textarea>
    <button className="bg-[#FF6600] w-[70%] m-auto p-1 py-2 rounded-md text-white text-lg font-semibold mt-3" type="submit">
     Submit
    </button>
   </form>
  </div>
 );
};

export default ContactForm;
