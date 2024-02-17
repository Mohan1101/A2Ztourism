import { FiCheck, FiLayers, FiUsers, FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";


const Speciality = () => {
  return (
    <div className="pb-16">
      <div className="flex flex-wrap gap-10">
        <div className="flex-1 basis-[20rem]">
          <h1 className="sub-heading">about us</h1>
          <h1 className="heading">we specialize in Bengali tourist visiting South India</h1>
          <p className="mt-3">

            We strive to make our offerings distinct and indispensable for our Bengali travellers. Our tailor-made itineraries are unique and based on your exact tastes.

          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiInfo />
              </div>
              <p>Tailored South Indian Experiences</p>

            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiInfo />
              </div>
              <p>Adventure, Relaxation, Cultural Exploration</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Unforgettable Memories Await</p>
            </div>
            <div className="mt-2 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <FiCheck />
              </div>
              <p>Your Perfect Bengali Getaway</p>
            </div>
            <Link to='/about-us' type="button" className="border border-primary border-2 mt-4 text-primary bg-white rounded-lg text-lg md:text-2xl px-5 py-2 text-center inline-flex items-center dark:bg-transparent hover:shadow-lg hover:bg-primary hover:text-white">
              Read More
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
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
                <h1>
                  Ancient ritual reimagined, stories told for generations.
                </h1>
                <div className="icon-box text-primary !bg-primary/20">
                  <FiInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
