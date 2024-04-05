import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import {
  About,
  Services,
  ServicesTwo,
  ServicesThree,
  ServicesFour,
  Blog,
  Contact,
  PageNotFound,
  Home,
} from "./pages";
import { closeDropdown } from "./features/uiSlice";
import Dropdown from "./components/common/DropDown";
import NewsLetter from "./components/common/NewsLetter";
import Loader from "./components/common/Loader";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div>
      {showLoader && <Loader />}
      <Navbar />
      <Dropdown />
      <div
        className="min-h-screen"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/destination" element={<Services />} />
          <Route path="/destination-1" element={<Services />} />
          <Route path="/destination-2" element={<ServicesTwo />} />
          <Route path="/destination-3" element={<ServicesThree />} />
          <Route path="/destination-4" element={<ServicesFour />} />
          <Route path="/what-we-do" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    
        <NewsLetter />
        <div className="p-[2%] bg-card-dark border border-card-dark">
          <Footer />
        </div>
   
      <BackToTopButton showButton={showButton} />
    </div>
  );
}  
 
export default App;
  


//#FF6400 