import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="relative ">
     <div className="flex bg-black opacity-60">
  <img
    src="/images/contactus.png"
    alt=""
    className="sm:w-full md:w-1/2 lg:w-1/3 h-96"
  />
  <img
    src="/images/contactus-2.png"
    alt=""
    className="hidden md:block md:w-1/2 lg:w-1/3 h-96"
  />
  <img
    src="/images/contactus-3.png"
    alt=""
    className="hidden lg:block w-1/3 h-96"
  />
</div>

      <div className="absolute right-32 top-72 md:right-24 md:top-44">
        <Link to='/contact' type="button" class="text-primary bg-white rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center hover:shadow-lg hover:bg-primary hover:text-white">
          Contact Us
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>


      </div>
    </div>
  );
};

export default NewsLetter;
