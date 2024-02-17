/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FiDelete, FiMoon, FiSun } from "react-icons/fi";
import { BiSearch, BiMenu, BiUser, BiBuildingHouse } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineTravelExplore, MdEmail } from "react-icons/md";


import {
  closeDropdown,
  closeSidebar,
  openSidebar,
  toggleDarkMode,
  uiStore,
} from "../../features/uiSlice";
import { navLinks } from "../../data/navLinks";
import SingleLink from "./SingleLink";

const Navbar = () => {
  const rootDoc = document.querySelector(":root");
  const { darkMode, isSidebarOpen } = useSelector(uiStore);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailAddress = "mohanarul1976@gmail.com";

  const handleContactClick = () => {
    const gmailLink = `https://mail.google.com/mail/u/0/#inbox?compose=new&to=${emailAddress}`;
    window.location.href = gmailLink;
  };


  // Dark mode toggle
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  // Store darkmode value to localStorage;
  useEffect(() => {
    if (darkMode) rootDoc.classList.add("dark");
    else rootDoc.classList.remove("dark");
    localStorage.setItem("Martvilla-theme-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleClose = (e) => {
    if (!e.target.classList.contains("link")) {
      dispatch(closeDropdown());
    }
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal")) dispatch(closeSidebar());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div
      className="navbar h-[45px] md:h-[55px] fixed w-full z-20 top-0 left-0 px-[2%]  md:px-[6%] flex-center-between py-[0.35rem] bg-white/60 border-b backdrop-blur-sm dark:border-dark dark:bg-card-dark/60"
      onMouseOver={handleClose}
    >
     <div className="flex items-center gap-4">
     <Link to="/" className="flex-shrink-0 flex-align-center gap-x-1">
        <div className="flex items-center">
        <img src="/images/A2Zlogo-2.png" alt="logo" className="h-10 py-0 md:py-2 md:h-16" />
        {/* <img src="/images/A2Zlogo-1.png" alt="logo" className="-ml-4  h-10" /> */}
        </div>
      </Link>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ajmira@a2ztourism.co.in" target="_blank" className="hidden md:block">
      <div className="flex-shrink-0 flex-align-center gap-x-1"  style={{ cursor: 'pointer' }}>
      <MdEmail className="text-3xl text-primary" />
     <h1 className="">ajmira@a2ztourism.co.in</h1>
      
    </div>
    </a>
   
   
    <a href="mailto:ajmira@a2ztourism.co.in" target="_blank" className="block md:hidden">
      <div className="flex-shrink-0 flex-align-center gap-x-1"  style={{ cursor: 'pointer' }}>
      <MdEmail className="text-3xl text-primary" />
     <h1 className="">Contact Us</h1>
      
    </div>
    </a>
     </div>

      <div className="flex-align-center gap-x-4">
        {/*-------------------------------------- Desktop Menu------------------------------------- */}
        <ul
          className={`hidden md:flex-align-center ${
            showSearchBar && "!hidden"
          }`}
        >
          {navLinks.map((link) => (
            <SingleLink {...link} key={link.id} />
          ))}
        </ul>

        {/*---------------------------------------- Mobile Menu------------------------------------- */}
        <div
          className={`lg:hidden mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-50 opacity-0 pointer-events-none transition-a  ${
            isSidebarOpen && "open"
          }`}
          onClick={handleCloseSidebar}
        >
          <ul
            className={`mobile-dialog overflow-auto absolute flex flex-col space-y-4 p-3 bg-white dark:bg-card-dark h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${
              isSidebarOpen && "open"
            }`}
          >
            <div className="border-b flex-center-between dark:border-slate-800">
              <p className="uppercase">menu</p>
              <div
                className="icon-box md:hidden"
                onClick={() => dispatch(closeSidebar())}
              >
                <FiDelete />
              </div>
            </div>
            {navLinks?.map(({ id, linkText, url, subLinks }) => (
              <ul key={id}>
                <NavLink
                  to={url}
                  end
                  className="w-fit before:!hidden"
                  onClick={() => dispatch(closeSidebar())}
                >
                  {linkText}
                </NavLink>
                {subLinks?.map(({ id, linkText, url }) => (
                  <ul key={id} className="mt-2">
                    <NavLink
                      to={url}
                      end
                      className="relative ml-8 text-sm before:hidden w-fit after:absolute after:w-2 after:h-2 after:rounded-full after:border-2 after:top-1/2 after:-translate-y-1/2 after:-left-4 dark:after:opacity-50"
                      onClick={() => dispatch(closeSidebar())}
                    >
                      {linkText}
                    </NavLink>
                  </ul>
                ))}
              </ul>
            ))}
          </ul>
        </div>

        <div className="space-x-2 flex-align-center">
          

          {/*----------------------------- Dark mode toggle-------------------------------------------------- */}
          <div
            className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent"
            onClick={handleDarkMode}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </div>
          {/*----------------------------- Profile Icon-------------------------------------------------- */}
          {/* <div className="bg-white shadow-md icon-box dark:bg-dark-light hover:shadow-lg hover:bg-transparent">
            <BiUser />
          </div> */}
          {/*------------------------------- Mobile Menu Toogle------------------------- */}
          <div
            className="icon-box md:hidden"
            onClick={() => dispatch(openSidebar())}
          >
            <BiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
