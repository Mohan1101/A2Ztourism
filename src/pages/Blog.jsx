import { FiCheck, FiInfo } from "react-icons/fi";
import Faqs from "./Faqs";

const Blog = () => {


  return (
    <div className="pt-8 md:pt-20 px-[3%] md:px-[6%]">
      <div className="pt-10 pb-2">
        <div className="flex flex-wrap gap-10">
          <div className="flex-1 basis-[20rem]">
            <h1 className="sub-heading">What We Do</h1>
            <h1 className="heading">Your Gateway to South India</h1>
            <p className="mt-3">
              Immerse yourself in the beauty of South India with our specialized services. From outstanding properties to professional guides, we provide the best for an exceptional travel experience.
            </p>
            <div className="mt-4">
              <div className="flex-align-center gap-x-2">
                <div className="icon-box text-primary !bg-primary/20">
                  <FiInfo />
                </div>
                <p>Exceptional Travel Services</p>
              </div>
              <div className="mt-2 flex-align-center gap-x-2">
                <div className="icon-box text-primary !bg-primary/20">
                  <FiInfo />
                </div>
                <p>Professional Guides</p>
              </div>
              <div className="mt-2 flex-align-center gap-x-2">
                <div className="icon-box text-primary !bg-primary/20">
                  <FiCheck />
                </div>
                <p>Tailored Itineraries</p>
              </div>
              <div className="mt-2 flex-align-center gap-x-2">
                <div className="icon-box text-primary !bg-primary/20">
                  <FiCheck />
                </div>
                <p>Modern City Locations</p>
              </div>
            </div>
          </div>
          <div className="flex-1 basis-[20rem]">
            <div className="relative">
              <img
                src="/images/speciality-1.jpg"
                alt=""
                className="rounded-lg w-full sm:h-[400px] object-cover"
              />
              <div className="hidden lg:absolute lg:block  bottom-12  -left-24 ">
                <div className="p-3 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                  <h1>Kerala's Theyyam explodes with life. Red costumes, fierce masks, spirits dance.</h1>
                  <div className="icon-box text-primary !bg-primary/20">
                    <FiInfo />
                  </div>
                </div>
                <div className="p-3 mt-4 ml-8 bg-white rounded-lg shadow-md w-72 flex-center-between gap-x-3 dark:bg-dark-light">
                  <h1>Ancient ritual reimagined, stories told for generations.</h1>
                  <div className="icon-box text-primary !bg-primary/20">
                    <FiInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Faqs/>
    </div>
  );
};

export default Blog;
