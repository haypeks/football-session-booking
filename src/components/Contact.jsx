import React from "react";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
};

const Contact = () => {
  return (
    <div name="contact" className="  w-full  pb-12 md:pb-24 full px-4 md:px-16">
      <div className="contact-banner"></div>
      <div className="flex flex-col p-4 justify-center mx-auto max-w-screen-lg h-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold  underline text-accent text-center mt-0">
            GET IN TOUCH
          </h2>
          <p className="leading-8 font-regular text-sm md:text-base md:leading-10 mt-4 mb-8 text-center text-accent">
            Feel free to contact us by submitting the form below and we will get
            back to you as soon as possible
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form className="flex flex-col gap-4 w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              className="p-2 bg-secondary border-2 rounded-md text-black focus:outline-none"
              required
            ></textarea>
            <button className="bg-primary text-white  my-1 mx-auto w-fit cursor-pointer rounded-md px-6 py-1 md:font-bold md:px-16 md:py-2 font-medium hover:scale-105 hover:text-gray-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
