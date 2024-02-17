import React from "react";
import { Link } from "react-scroll";
const Hero = () => {
  return (
    <div
      className="relative z-0 flex-wrap min-h-screen gap-2 md:-mt-10 flex-center-center"

    >
      <img src="/images/hero-bg-pattern-2.png" alt="" className="absolute w-full rounded-lg -z-10 opacity-10 dark:opacity-100" />
      <div className="absolute top-0 right-0 rounded-full bg-[#04a7ff]/30 dark:bg-[#04a7ff]/50 w-72 h-72 -z-10 blur-[120px]"></div>
      <div className="flex-1 basis-[20rem]">
        <h1 className="text-4xl font-bold capitalize md:text-5xl">
          A2Z Tourism <br /> Elevate your travel experience
        </h1>
        <div className="pl-3 mt-5 text-md  md:text-lg border-l-4 border-primary">
          <p>
            We are your destination management partners specializing in Bengali tourist visiting South India. We believe that travel is not just about reaching a destination; it’s about creating unforgettable experiences and memories that last a lifetime. Whether you’re seeking adventure, relaxation, or cultural exploration, we are here to curate the perfect vacation for you.
          </p>
          <p className="mt-3">
            আমরা আপনার গন্তব্য ব্যবস্থাপনা অংশীদার, দক্ষিণ ভারতে আসা বাংলা পর্যটকদের বিশেষায়িত। আমরা বিশ্বাস করি যে ভ্রমণ মানে শুধু গন্তব্যে পৌঁছানো নয়; এটি অবিস্মরণীয় অভিজ্ঞতা এবং স্মৃতি তৈরি করার বিষয় যা সারাজীবন স্থায়ী হয়। আপনি দুঃসাহসিক, শিথিলকরণ বা সাংস্কৃতিক ব্যাখ্যা খুঁজছেন কিনা, আমরা আপনার জন্য নিখুঁত অবকাশ কাটানোর জন্য এখানে আছি।

            আমরা আমাদের অফার গুলিকে বাংলা ভ্রমণকারীদের জন্য আলাদা এবং অপরিহার্য করে তোলার চেষ্টা করি। আমাদের বিশেষজ্ঞ দ্বারা তৈরি ভ্রমণ পথগুলি অনন্য এবং আপনার সঠিক স্বাদের উপর ভিত্তি করে।
          </p>
        </div>
        <Link smooth spy to="aboutUs" activeClass="active" className="mt-8 border border-primary border-2 text-primary bg-white rounded-lg text-lg md:text-2xl px-5 py-2.5 text-center inline-flex items-center hover:bg-primary hover:text-white">
          <button
          >Get Started</button>
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
      <div className="flex-1 md:-mt-24 basis-[16rem]">
        <img src="https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/hero-6.png?alt=media&token=5c9a042d-4db2-4b48-be08-c8407ff57e9e" alt="" className="w-full rounded-lg mb-2" />
      </div>
    </div>
  );
};

export default Hero;
