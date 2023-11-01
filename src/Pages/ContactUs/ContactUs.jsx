import React from "react";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div>
      <div className="w-11/12 md:w-10/12 mx-auto">
        <PageBanner
          name="Contact Us"
          previousPage="Home"
          currentPage="Contact Us"
        />
        <div className="my-10 md:my-20  text-center md:w-[80%] mx-auto">
          <h1 className="text-xl md:text-4xl font-bold mb-5">
            Keep in touch with us
          </h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste aut
            maiores hic voluptatum impedit consequuntur, optio assumenda quod.
            Eligendi earum assumenda, voluptate ducimus omnis, ratione placeat
            reprehenderit ut sint vel harum. Eaque hic vel illum delectus odit
            suscipit dolorem dolor, ipsam, culpa repellendus qui distinctio?
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mx-auto border-t border-b  gap-8 md:gap-20 my-8 md:mt-20 p-10">
        <div className="flex gap-2 items-center md:border-r-2">
          <div className="text-8xl text-[#6bb42f] opacity-60">
            <AiOutlinePhone />
          </div>
          <div>
            <h2 className="text-2xl">Phone:</h2>
            <p className="text-gray-400">Mobile: (+880) 1779021567</p>
            <p className="text-gray-400"> WhatsApp: (+880) 1779021567</p>
          </div>
        </div>
        <div className="flex gap-2 items-center   md:border-r-2">
          <div className="text-8xl text-[#6bb42f] opacity-60">
            <AiOutlineHome />
          </div>
          <div>
            <h2 className="text-2xl">Address:</h2>
            <p className="text-gray-400">DattaPara ,Ashulia</p>
            <p className="text-gray-400">Savar, Dhaka</p>
          </div>
        </div>
        <div className="flex gap-2  items-center  ">
          <div className="text-8xl text-[#6bb42f] opacity-60">
            <AiOutlineMail />
          </div>
          <div>
            <h2 className="text-2xl">Email:</h2>
            <p className="text-gray-400">zoa.agro@gmail.com</p>
            <p className="text-gray-400">zoa@agro.com</p>
          </div>
        </div>
      </div>
      <iframe
        className="w-full h-[250px] md:h-[400px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.427783826926!2d90.3085872737561!3d23.87444488400583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c334cd43907b%3A0x8e106319ee52d8a2!2sAshulia%20Model%20Town.!5e0!3m2!1sbn!2sbd!4v1698431611188!5m2!1sbn!2sbd"
        arial-hidden="true"
        loading="lazy"
      ></iframe>
      <div className="w-11/12 md:w-1/2 mx-auto my-20 ">
        <h1 className="text-xl md:text-4xl font-bold mb-5 text-center">
          Contact Us Now
        </h1>
        <p className="text-center my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          veniam.
        </p>
        <form action="">
          <div className="form-control ">
            <div className="flex justify-between gap-10 mb-10">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered rounded-none h-16 w-full bg-base-200"
              />
              <input
                type="text"
                placeholder="Your Email Address"
                className="input input-bordered rounded-none h-16 w-full bg-base-200"
              />
            </div>
            <textarea
              type="textarea"
              placeholder="Your Message"
              className="input input-bordered rounded-none w-full h-44 pt-2 bg-base-200"
            />
            <input
              type="submit"
              value="Send Message"
              className="btn  w-1/2 mx-auto mt-10 bg-[#6bb42f]"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
