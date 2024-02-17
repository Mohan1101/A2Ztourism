/* eslint-disable jsx-a11y/anchor-is-valid */

import { BiBuildingHouse } from "react-icons/bi";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineTravelExplore, MdEmail, MdLocalPhone, MdLocationOn, MdMobileFriendly } from "react-icons/md";

const Footer = () => {
  return (
    <div className="px-2 md:px-16 text-slate-100">
      <footer>
        <div className="flex flex-wrap gap-2 md:gap-64">
          <div className="flex-1 basis-[10rem]">
            <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
              <img src="/images/A2Zlogo-1.png" alt="logo" className="w-20 h-16" />
              <h1 className="text-xl md:text-3xl font-semibold">A2ZTourism </h1>
            </Link>
            <div className="mt-3">
              <p className="text-md md:text-lg">
                As your destination partners for South India, we specialize in curating unique experiences for Bengali tourists. Our tailor-made itineraries ensure unforgettable adventures, relaxation, and cultural exploration based on individual preferences.
              </p>
              <div className="flex items-center gap-6 my-3 md:my-10 ">
                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FiFacebook />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaTwitter />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaInstagram />
                </div>

                <div className="icon-box bg-dark-light hover:bg-hover-color-dark">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>



          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl md:text-3xl font-semibold">Quick Links</h2>
            <ul>
              <li className="my-3 text-muted">
                <Link to="/about-us" className="text-md md:text-lg">About</Link>
              </li>
              <li className="my-3 text-muted">
                <Link to="/destination" className="text-md md:text-lg">Destination</Link>
              </li>
              <li className="my-3 text-muted">
                <Link to='/what-we-do' className="text-md md:text-lg">What We Do</Link>
              </li>
              <li className="my-3 text-muted">
                <Link to="/contact" className="text-md md:text-lg">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[15rem]">
            <h2 className="text-xl md:text-3xl font-semibold">Find Us</h2>
            <ul>
            <a
                  href="https://maps.app.goo.gl/gL4LeSNwLFTaTCgr9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <li className="my-3  flex items-center gap-2 text-muted">
                
                  <div className="">
                    <MdLocationOn className="text-3xl text-primary" />
                  </div>
                  <h1 className="text-md md:text-lg">G1, Skylines Elegance, Lakshmi Sarathy Nagar, Medavakkam, Chennai 600100</h1>
              
              </li>
              </a>
              <a href="tel:8754694395">
                <li className="my-3  flex items-center gap-2  text-muted">


                  <div className="">
                    <MdLocalPhone className="text-3xl text-primary" />
                  </div>
                  <h1 className="text-md md:text-lg">8754694395</h1>




                </li>
              </a>
              <li className="my-3 text-muted">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ajmira@a2ztourism.co.in" target="_blank" className="hidden md:block">
                  <div className="flex-shrink-0 flex-align-center gap-x-2" style={{ cursor: 'pointer' }}>
                    <MdEmail className="text-3xl text-primary" />
                    <h1 className="text-md md:text-lg">Email</h1>

                  </div>
                </a>


                <a href="mailto:ajmira@a2ztourism.co.in" target="_blank" className="block md:hidden">
                  <div className="flex-shrink-0 flex-align-center gap-x-2" style={{ cursor: 'pointer' }}>
                    <MdEmail className="text-3xl text-primary" />
                    <h1 className="text-md md:text-lg">Email</h1>

                  </div>
                </a>
              </li>
             
            </ul>
          </div>





        </div>
      </footer>
      <div className="py-2 flex items-center justify-center gap-4 border-t-2 text-muted border-dark">
        <FaRegCopyright />
        <p> All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
