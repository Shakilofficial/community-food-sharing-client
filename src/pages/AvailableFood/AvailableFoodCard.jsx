/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AvailableFoodCard = ({ availableFood }) => {
    const { _id, foodImage, foodName, foodQuantity, expiredDate } = availableFood;
  return (
    <div className="shadow-md rounded-lg bg-white dark:bg-gray-800">
      <div className="p-4 space-y-3">
        <img className="rounded-lg h-52 w-full" src={foodImage} alt="" />
        <h5 className="font-bold text-center text-xl">{foodName}</h5>
        <div className="flex justify-between items-center pb-4">
          <p className="font-semibold text-red-500">Quantity: {foodQuantity}</p>
          <p className="font-semibold text-red-500">
            Expired Date: {expiredDate}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/food/${_id}`}>
            <button className="px-4 py-2 text-white text-sm font-semibold rounded bg-red-500 hover:bg-red-800 hover:text-white dark:bg-gray-100 dark:text-black">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;
