import Banner from "./Banner/Banner";
import Features from "./Features/Features";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div className="space-y-10">
          <Banner />
          <Features />
          <Team/>
      <h3 className="text-xl">This is Home Page</h3>
    </div>
  );
};

export default Home;
