import { useState } from "react";
import { FaCalendarCheck, FaCheckCircle, FaLocationArrow } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const FoodCardDetails = () => {
    const [isRequestModalOpen, setRequestModalOpen] = useState(false);

  const food = useLoaderData();
  const {
    _id,
    foodImage,
    foodName,
    foodQuantity,
    expiredDate,
    donator,
    pickupLocation,
    additionalNotes,
    } = food;
    
    
    const openRequestModal = () => {
        setRequestModalOpen(true);
      };
    
      const closeRequestModal = () => {
        setRequestModalOpen(false);
    };
    
  return (
    <div className="my-10 space-y-16 px-4">
      <div
        className="bg-cover h-[300px] text-white rounded-lg"
        style={{
          backgroundImage: `url('https://i.ibb.co/jfp3KmS/bannerfood.jpg')`,
        }}
      >
        <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) 100%); rounded-lg bg-opacity-90 h-full">
          <div className="pt-32 pl-20">
            <h3 className="text-4xl font-bold">
              Details Information of your Selected Food
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-lg mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between items-center space-x-4">
          <img
            alt=""
            src={donator.donatorImage}
            className="object-cover w-14 h-14 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <p className="font-semibold">{donator.donatorName}</p>
            <p className="flex justify-center items-center gap-4">
              <FaLocationArrow />
              <span className="text-xs font-semibold dark:text-gray-400">
                {pickupLocation}
              </span>
            </p>
          </div>
        </div>
        <div>
          <img
            src={foodImage}
            alt=""
            className="object-cover rounded-md w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl text-center font-semibold">
            Food: {foodName}
          </h2>
          <p className="text-center dark:text-gray-400">{additionalNotes}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <p className="flex justify-center font-semibold items-center gap-4">
            <FaCheckCircle /> Quantity: 
            <span className="text-lg text-red-500 dark:text-gray-400">
              {foodQuantity}
            </span>
          </p>
          <p className="flex justify-center font-semibold items-center gap-4">
            <FaCalendarCheck /> Expire: 
            <span className="text-lg text-red-500 dark:text-gray-400">
              {expiredDate}
            </span>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/food/${_id}`}>
            <button className="px-4 py-2 text-white text-sm font-semibold rounded bg-red-500 hover:bg-red-800 hover:text-white dark:bg-gray-100 dark:text-black">
              Request
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCardDetails;
