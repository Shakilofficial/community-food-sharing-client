import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Team = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <h4 className="text-xl text-red-500 font-bold mb-6">Team</h4>
        <h2 className="text-5xl font-bold text-center">Meet the dedicated Team</h2>
        <div className="flex flex-row flex-wrap-reverse justify-center mt-16">
          <div className="flex flex-col shadow-md justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/PthLJZz/avatar-1.jpg"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">John Deo</p>
              <p>Co-Founder</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <div className="flex text-xl justify-start items-center space-x-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-md w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/1GbFMK6/team2.jpg"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Jane Smith</p>
              <p>Community Manager</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <div className="flex text-xl justify-start items-center space-x-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-md w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/7C4wp1y/team3.jpg"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Mark Johnson</p>
              <p>Lead Developer</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <div className="flex text-xl justify-start items-center space-x-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-md w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/Pg43B2C/team1.jpg"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Emily Wilson</p>
              <p>Marketing Specialist</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <div className="flex text-xl justify-start items-center space-x-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-md w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/N67Zwpp/avatar-2.jpg"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Leroy Jenkins</p>
              <p>UX Designer</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <div className="flex text-xl justify-start items-center space-x-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center shadow-md w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
            <img
              alt=""
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              src="https://i.ibb.co/TYzF7yn/avatar-3.jpg"
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Lisa Davis</p>
              <p>Visual Designer</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <div className="flex text-xl justify-start items-center space-x-3">
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
