import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <img
          src="https://i.ibb.co/R4qh10C/undraw-Page-not-found-re-e9o6.png"
          alt="Error | Not Found"
        />
      </div>
      <Link to="/">
        <button className="mt-10 text-center btn btn-outline capitalize text-red-500 font-semibold">
          Goto Home Page
        </button>
      </Link>
    </div>
  );
};

export default Error;
