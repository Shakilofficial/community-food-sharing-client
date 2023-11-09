import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.svg";
import swal from "sweetalert";
import UseAuth from "../../hooks/UseAuth";

const Login = () => {
  const { signIn, googleSignIn } = UseAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password)
      .then((result) => {
        swal({
          title: "Good job!",
          text: "Successfully Login",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        swal({
          title: "Good job!",
          text: "Successfully Login",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="my-10">
      <div className="px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="w-1/2 mx-auto">
          <img src={loginImg} alt="" />
        </div>
        <div className="w-full md:w-1/2 p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-3xl font-bold text-blue-700 text-center">
            Login
          </h1>
          <p className="text-center dark:text-gray-400">
            Sign in to access your account
          </p>
          <form onSubmit={handleLogin} className="space-y-6">
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
              <div className="flex justify-end text-xs dark:text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <input
              className="block w-full p-3 text-center rounded-md font-semibold text-white bg-blue-500 dark:text-gray-900 dark:bg-blue-500"
              type="submit"
              value="Sign in"
            />
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex text-2xl justify-center space-x-4">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <FaGoogle />
            </button>
            <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
              <FaGithub />
            </button>
          </div>
          <div className="mt-4 font-semibold text-slate-500 text-center">
            Do not have an account?
            <Link
              to="/signUp"
              className="ml-2 text-blue-600 hover:underline hover:underline-offset-4"
            >
              SignUp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
