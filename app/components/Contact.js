import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const blockedEmail = "shettysakshi2002@gmail.com";

  const validateEmail = (email) => {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      toast.error('All fields are required!');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address!');
      return;
    }

    if (email.toLowerCase() === blockedEmail.toLowerCase()) {
      toast.error('This email is not allowed.');
      return;
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        e.target.reset();
      } else {
        toast.error('Something went wrong while sending your message.');
      }
    } catch (err) {
      toast.error('Network error or server is unreachable.');
    }
  };

  return (
    <section id="contact" className="text-teal-700 body-font relative">
      <ToastContainer position="bottom-right" autoClose={4000} hideProgressBar />
      <h2 className="text-4xl font-semibold sm:text-6xl mb-12 sm:mb-1 text-center w-full sm:pt-20">Contact Me</h2>
      <div className="px-5 mx-auto flex justify-between sm:flex-nowrap flex-wrap">
        <div className="lg:w-[30rem] md:w-1/2 w-5/6">
          <video
            className="object-contain rounded sm:h-[30rem] w-[27rem] ml-8 sm:ml-20"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Contact/ContactSakshiShetty.mp4" type="video/mp4" />
          </video>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:w-[47%] 2xl:w-[43%] md:w-1/2 bg-white flex flex-col sm:mr-8 2xl:mr-28 w-full md:py-2 mt-8 md:mt-4 mb-9"
        >
          <p className="leading-relaxed mb-5 text-slate-800">
            Hey there! I'm always looking to learn and improve — if something stood out (good or bad), feel free to let me know. I truly appreciate it 💜
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-slate-800">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-teal-900 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30 text-base outline-none text-teal-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-slate-800">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-teal-900 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30 text-base outline-none text-teal-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-slate-800">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-teal-900 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30 h-32 text-base outline-none text-teal-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 rounded text-lg"
          >
            Share With Me 📬
          </button>
        </form>
      </div>
    </section>
  );
};
