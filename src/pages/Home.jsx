import {
  Brands,
  Counter,
  Featured,
  Projects,
  Services,
  Testimonial,
} from "../components/common/page-componets";
import {
  Feeds,
  Filters,
  Hero,
  Invest,
  Speciality,
} from "../components/home/home-1";

const Home = () => {
  return (
    <div className="pt-16 px-[3%] md:px-[6%]">
      <Hero />
      <Filters />
      <Invest />
      <div id='aboutUs' className="pt-12 md:pt-16">
        <Speciality />
      </div>
      <Services />
      <Counter />
      <Projects />
      
    </div>
  );
};

export default Home;
