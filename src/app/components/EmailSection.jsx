"use client";
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { FaSquareGithub,  FaLinkedin, FaGoogle } from "react-icons/fa6";

const EmailSection = () => {
  const [state, handleSubmit] = useForm("mzzzkwnw");
  if (state.succeeded) {
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    emailInput.value = '';
    subjectInput.value = '';
    messageInput.value = '';
  }
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 mt-12 gap-4"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-4">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] max-w-md">
          {" "}
           Whether you have a question or want to collaborate,
           my inbox is always open. I will get back to you!
        </p>
        <div className="home-sci mb-2 mt-3 ml-5 flex justify-between sm:justify-start sm:ml-0">
          <a target="_blank" href="gusse2593@gmail.com"><FaGoogle size={17} /></a>
          <a target="_blank" href="https://github.com/easy-life93/"><FaSquareGithub size={17} /></a>
          <a target="_blank" href="https://www.linkedin.com/in/stephen-gusse93"><FaLinkedin size={17} /></a>
        </div>
      </div>
      <div>
        {state.succeeded ? (
          <p className="text-green-500 text-xl text-center my-2">
            Email Sent Successfully. Thank you!
          </p>
        ) :( null
        )}
          <form className="flex flex-col" action="https://formspree.io/f/mzzzkwnw" method="post">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#214964] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="username@yourmail.com"
              />
              <ValidationError 
                prefix="Email" 
                field="email" 
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#214964]   border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="your message title..."
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="6"
                className="bg-[#214964] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
                placeholder="your entire message..."
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" className="self-center email-sbt-btn w-full md:w-fit mt-5 px-8 py-3 sm:ml-0 rounded text-white"  disabled={state.submitting}> 
              Send Message
            </button>
          </form>
      </div>
    </section>
  );
};

export default EmailSection;
