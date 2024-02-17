import FaqsList from "../components/faqs/FaqsList";
import { NewsLetter } from "../components/services";

const Faqs = () => {
  return (
    <div className="py-4 px-[1%]">
      <div className="flex flex-col items-center md:flex md:flex-row items-center justify-center gap-8">
      <div className="">
        
        <img
          src="https://firebasestorage.googleapis.com/v0/b/a2ztourism-e8dcb.appspot.com/o/faq.png?alt=media&token=c7b11e35-1e20-4627-84a6-b9ecb1b276a7"
          alt=""
          className="rounded-lg w-full md:w-[1600px] md:h-[400px] object-cover"
        />
    </div>
        <div >
          <FaqsList />
        </div>
       
      </div>
    </div>
  );
};

export default Faqs;
