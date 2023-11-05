import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="font-semibold mr-2">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-red-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold mr-2">
        <NavLink
          to="/available-foods"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-red-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          Available Foods
        </NavLink>
      </li>
      <li className="font-semibold mr-2">
        <NavLink
          to="/add-food"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-red-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          Add Food
        </NavLink>
      </li>
      <li className="font-semibold mr-2">
        <NavLink
          to="/manage-my-foods"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-red-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          Manage My Foods
        </NavLink>
      </li>
      <li className="font-semibold mr-2">
        <NavLink
          to="/my-food-request"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-white bg-red-500 px-2 py-2 rounded-lg"
              : ""
          }
        >
          My Food Request
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          className="flex justify-center items-center gap-2 ml-14 lg:ml-0"
          to="/"
        >
          <img
            className="h-12 w-12"
            src="https://i.ibb.co/G2LrT0C/bibimbap.png"
            alt=""
          />
          <p className="font-bold text-xl">ExcessEats</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems} </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
        <button type="button" className="px-4 py-2 font-semibold border border-red-500 rounded-md hover:bg-red-500 dark:text-gray-100">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
