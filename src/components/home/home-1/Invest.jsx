import { FiArrowRight, FiHome } from "react-icons/fi";

const Invest = () => {
  return (
    <div className="pt-10 pb-4">
      <div className="grid grid-cols-1 overflow-hidden rounded-lg sm:grid-cols-2 md:grid-cols-3">
        <div className="md:col-span-1">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/southindia.jpg?alt=media&token=3e3ff411-bfaa-42e7-90a7-8e2b0c161e55"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="relative flex-col gap-5 p-5 md:col-span-2 bg-secondary text-slate-100 flex-align-center md:flex-row">
          <div className="flex-shrink-0 p-3 -mt-16 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-dark-light/60 sm:-ml-72 md:-ml-20 sm:mt-0">
            <div className="flex-shrink-0 flex-align-center">
              <img
                src="/images/avatar.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 rounded-full"
              />
              <img
                src="/images/avatar-1.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <img
                src="/images/avatar-2.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <img
                src="/images/avatar-3.png"
                alt=""
                className="flex-shrink-0 w-8 h-8 -ml-2 border-2 border-white rounded-full dark:border-dark"
              />
              <div className="grid flex-shrink-0 w-8 h-8 -ml-2 text-white border-2 border-white rounded-full bg-primary place-items-center dark:border-dark">
                <h1>+5</h1>
              </div>
            </div>
            <h1 className="mt-2 text-secondary dark:text-slate-300">
              People had great experience with us
            </h1>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              You get to explore the tourist attractions of South India
            </h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
