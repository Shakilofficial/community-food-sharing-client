import Banner from "./Banner/Banner";
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
      <h3 className="text-xl">This is Home Page</h3>
    </div>
  );
};

export default Home;
