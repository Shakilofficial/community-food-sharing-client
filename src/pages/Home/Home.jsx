import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-10">
      <Banner />
      <Team />
      <Testimonial />
      <Features />
      <Contact />
    </div>
  );
};

export default Home;
