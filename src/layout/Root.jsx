import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
const Root = () => {
  return (
    <div className="max-w-[1440px] space-y-12 mx-auto font-poppins">
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
