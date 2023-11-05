import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
const Root = () => {
  return (
    <div className="max-w-[1440px] space-y-12 mx-auto font-poppins">
      <Navbar />
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default Root;
