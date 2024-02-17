import { BiMap } from "react-icons/bi";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 py-16 sm:grid-cols-2 md:grid-cols-3">
      <div className="text-center">
        <a href="tel:8754694395">
          <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl">
            <FiPhone />
          </div>
          <h1 className="mt-2 text-lg font-semibold">Phone Number</h1>
          <p>8754694395</p>
        </a>
      </div>

      <div className="text-center">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ajmira@a2ztourism.co.in" target="_blank" className="hidden md:block">
          <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl">
            <FiMail />
          </div>
          <h1 className="mt-2 text-lg font-semibold">Email Address</h1>

          <div className="" style={{ cursor: 'pointer' }}>

            <h1 className="">ajmira@a2ztourism.co.in</h1>

          </div>


        </a>

        <a href="mailto:ajmira@a2ztourism.co.in" target="_blank" className="md:hidden">
          <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl">
            <FiMail />
          </div>
          <h1 className="mt-2 text-lg font-semibold">Email Address</h1>

          <div className="" style={{ cursor: 'pointer' }}>

            <h1 className="">ajmira@a2ztourism.co.in</h1>

          </div>


        </a>
      </div>
      <div className="text-center">
        <a
          href="https://maps.app.goo.gl/gL4LeSNwLFTaTCgr9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-box !h-14 !w-14 !bg-primary text-white mx-auto text-2xl">
            <BiMap />
          </div>
          <h1 className="mt-2 text-lg font-semibold">Office Address</h1>
          <p>G1, Skylines Elegance, Lakshmi Sarathy Nagar,</p>
          <p>Medavakkam, Chennai 600100</p>
        </a>
      </div>

    </div>
  );
};

export default ContactInfo;
