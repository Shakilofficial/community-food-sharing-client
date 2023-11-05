import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  return (
    <div className="space-y-10">
          <Banner />
          <Features/>
      <h3 className="text-xl">This is Home Page</h3>
    </div>
  );
};

export default Home;
