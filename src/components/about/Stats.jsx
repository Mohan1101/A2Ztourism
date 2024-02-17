const Stats = () => {
  return (
    <div className="pt-10 pb-16">
      <div className="text-center">
        <h1 className="heading">
          Elevate your travel experience in Tamil Nadu and Kerala <br /> Discover unforgettable journeys tailored to your preferences.
        </h1>
        <p className="mt-4">
          Immerse yourself in unique adventures, relaxation, or cultural exploration. Our customized itineraries ensure distinctive and essential experiences for Bengali travelers in Tamil Nadu and Kerala.
        </p>
      </div>
      <div className="flex flex-wrap gap-24 mt-8">
        <div className="relative flex-1 basis-[18rem]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/Cochin.png.jpg?alt=media&token=6e7c48c2-19b9-4c8a-b93b-5525d3d58724"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-4/5 p-3 -translate-x-1/2 border-4 border-white rounded-lg -bottom-10 left-1/2 dark:border-main-dark bg-secondary text-slate-200">
            <div className="gap-5 flex-center-between">
              <h1 className="font-semibold">
                Explore Tamil Nadu and Kerala with Confidence
              </h1>

              <div>
                <h1 className="text-2xl font-bold text-primary">2500+</h1>
                <p>Happy Travelers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex-1 basis-[22rem]">
          <p>
            Uncover the beauty of Tamil Nadu and Kerala through our expertly crafted travel experiences. Immerse in diverse landscapes, rich culture, and personalized adventures.
          </p>
          <p className="mt-3">
            Our commitment is to make your journey extraordinary, whether it's the thrill of adventure, tranquility of relaxation, or the depth of cultural exploration in Tamil Nadu and Kerala.
          </p>
          <div className="mt-3">
            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">Adventure Packages</h1>
                <h1 className="font-semibold capitalize">80%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-4/5 h-full rounded-full bg-secondary"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">
                  Relaxation Retreats
                </h1>
                <h1 className="font-semibold capitalize">70%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[70%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">Cultural Exploration</h1>
                <h1 className="font-semibold capitalize">90%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[90%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex-center-between">
                <h1 className="font-semibold capitalize">Satisfied Travelers</h1>
                <h1 className="font-semibold capitalize">95%</h1>
              </div>
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100 dark:bg-dark-light">
                <div className="w-[95%] h-full bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
