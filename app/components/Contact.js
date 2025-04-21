import React from 'react';

export const Contact = () => {
  return (
    <section id="feedback" className="text-teal-700 body-font relative">
    <h2 className=" text-3xl sm:text-6xl mb-1 text-center w-full mt-20">Contact Me</h2>
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-[30rem]  md:w-1/2 w-5/6">
        <video
                        className="object-contain rounded h-[30rem] w-[27rem] ml-20 "
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/ContactSakshiShetty.mp4" type="video/mp4" />

                    </video>
          
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
          <p className="leading-relaxed mb-5 text-teal-700">
          Hey there! I'm always looking to learn and improve — if something stood out (good or bad), feel free to let me know. I truly appreciate it 💜
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-teal-700">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-teal-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-teal-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-teal-700">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-teal-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-teal-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-teal-700">Message</label>
            <textarea id="message" name="message" className="w-full bg-white rounded border border-teal-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-teal-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button className="text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 rounded text-lg">
          Share With Me 📬
          </button>
        </div>
      </div>
    </section>
  );
};
