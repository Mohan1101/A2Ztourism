import {
  AboutUs,
  Brands,
  Feeds,
  Team,
  Testimonial,
} from "../components/common/page-componets";

import {Stats} from "../components/about/index";

const About = () => {
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <AboutUs />
      <Stats />
      <Testimonial /> 
    </div>
  );
};

export default About;
