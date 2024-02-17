import { BiGlobe, BiCycling, BiRocket } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="md:py-8 md:pb-24 ">
      <div className="flex flex-wrap gap-24">
        <div className="relative flex-1 basis-[18rem] border">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/elephants.png.jpg?alt=media&token=80edeef4-e1f0-4bd8-8c54-433e527e11a3"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/TamilNadu%2Ftemple-1.png.jpg?alt=media&token=32951943-5dc6-4c29-a34e-ab28e17e1aea"
            alt=""
            className="absolute object-cover w-36 h-48 border-4 border-white rounded-lg sm:w-72 sm:h-80 dark:border-dark -bottom-20 -right-2 md:-right-20"
          />
        </div>
        <div className="relative flex-1 basis-[22rem]">
          <h1 className="sub-heading">about us</h1>
          <h1 className="heading">We Specialize In Bengali Tourist Visiting South India</h1>
          <p className="mt-3">
            We are your destination management partners specializing in Bengali tourist visiting South India. We believe that travel is not just about reaching a destination; it’s about creating unforgettable experiences and memories that last a lifetime. Whether you’re seeking adventure, relaxation, or cultural exploration, we are here to curate the perfect vacation for you.
            We strive to make our offerings distinct and indispensable for our Bengali travellers. Our tailor-made itineraries are unique and based on your exact tastes.


          </p>
          <div className="mt-4">
            <div className="flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiGlobe />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                Tailored South Indian Experiences

                </h1>
                <p>
                Adventure, Relaxation, Cultural Exploration

                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiCycling />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                Unforgettable Memories Await

                </h1>
                <p>
                Your Perfect Bengali Getaway
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiRocket />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  Distinctive Itineraries for You
                </h1>
                <p>
                  Indispensable travel plans tailored to your exact tastes.
                </p>
              </div>
            </div>

            <div className="mt-3 flex-align-center gap-x-2">
              <div className="icon-box text-primary !bg-primary/20">
                <BiRocket />
              </div>
              <div>
                <h1 className="font-semibold capitalize">
                  Bengali-Friendly Vacation Expertise
                </h1>
                <p>
                  Your perfect getaway with a touch of Bengali warmth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
