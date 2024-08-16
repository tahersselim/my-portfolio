"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css"; // Importing regular CSS

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setStatus('The email was sent successfully');
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          setStatus('Failed to send the email. Please try again later.');
          setIsLoading(false);
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contactpage">
      <div id="contact">
        <h1 className="contactpagetitle">Contact Me</h1>
        <span className="contactdescription">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
          {status && <p className="statusMessage">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
