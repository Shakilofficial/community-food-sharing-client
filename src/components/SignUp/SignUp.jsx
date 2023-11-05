import { Link } from "react-router-dom";
import registerImg from "../../assets/images/register.svg";
const SignUp = () => {
  return (
    <div className="my-10">
      <div className="px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
        <div className="w-1/2 mx-auto">
          <img src={registerImg} alt="" />
        </div>
        <div className="w-full md:w-1/2 p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <h1 className="text-3xl font-bold text-center">Register</h1>
          <p className="text-center dark:text-gray-400">
          Register to create your account
          </p>
          <form className="space-y-6">
            <div className="space-y-1 text-sm">
              <label className="block dark:text-gray-400">Username</label>
              <input
                type="text"
                name="username"
                id="username"
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
                id="email"
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
                id="password"
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
                id="photoUrl"
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              />
            </div>
            <input
              className="block w-full p-3 text-center rounded-md dark:text-gray-900 dark:bg-violet-400"
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
