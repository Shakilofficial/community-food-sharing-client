import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import registerImg from "../../assets/images/register.svg";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;
    const user = { displayName, email, password, photoURL };
    console.log(user);
    createUser(email, password).then((result) => {
      console.log(result);
      navigate(location?.state ? location.state : "/");
      swal({
        title: "Good job!",
        text: "Successfully created an Account",
        icon: "success",
      })
      .catch((error) => {
        console.error(error.message);
      });
    });
  };
  return (
    <div className="my-10">
      <div className="px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="w-1/2 mx-auto">
          <img src={registerImg} alt="" />
        </div>
        <div className="w-full md:w-1/2 p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-3xl font-bold text-red-700 text-center">
            Register
          </h1>
          <p className="text-center dark:text-gray-400">
            Register to create your account
          </p>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400">Username</label>
              <input
                type="text"
                name="displayName"
                placeholder="Username"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <input
              className="block w-full p-3 text-center rounded-md font-semibold text-white bg-red-500 dark:text-gray-900 dark:bg-red-400"
              type="submit"
              value="Sign Up"
            />
          </form>
          <div className="mt-4 font-semibold text-slate-500 text-center">
            Already have an Account? Please
            <Link
              to="/login"
              className="ml-2 text-red-600 hover:underline hover:underline-offset-4"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
