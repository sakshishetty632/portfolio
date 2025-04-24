import React from 'react';

export const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      alert('Message sent successfully!');
      e.target.reset();
    } else {
      alert('Something went wrong.');
    }
  };

  return (
    <section id="contact" className="text-teal-700 body-font relative">
      <h2 className="text-3xl sm:text-6xl mb-1 text-center w-full mt-10">Contact Me</h2>
      <div className="px-5 mx-auto flex justify-between sm:flex-nowrap flex-wrap">
        <div className="lg:w-[30rem] md:w-1/2 w-5/6">
          <video
            className="object-contain rounded h-[30rem] w-[27rem] ml-20"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/ContactSakshiShetty.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:w-[47%] md:w-1/2 bg-white flex flex-col mr-8 w-full md:py-2 mt-8 md:mt-4 mb-9"
        >
          <p className="leading-relaxed mb-5 text-gray-800">
            Hey there! I'm always looking to learn and improve — if something stood out (good or bad), feel free to let me know. I truly appreciate it 💜
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-800">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white rounded border border-teal-900 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30 text-base outline-none text-teal-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white rounded border border-teal-900 focus:border-teal-700 focus:ring-2 focus:ring-teal-700/30 text-base outline-none text-teal-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-800">Message</label>
            <textarea
              id="message"
              name="message"
              required
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
