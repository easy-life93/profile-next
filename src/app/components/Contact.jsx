import React from 'react';
import EmailSection from './EmailSection';
const Contact = () => {
  return (
    <section className="my-14 " id="contact">
      <div className="mt-5">
        <h2 className="text-center font-mono italic text-4xl py-3 sm:text-6xl font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Contact Me!
        </h2>
      </div>
      <EmailSection />
    </section>
  );
}

export default Contact;
