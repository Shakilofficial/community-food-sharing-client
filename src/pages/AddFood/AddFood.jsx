import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [foodStatus, setFoodStatus] = useState("available");

  const onSubmit = (food) => {
    const newFoodItem = {
      foodName: food.foodName,
      foodImage: food.foodImage,
      foodQuantity: food.foodQuantity,
      pickupLocation: food.pickupLocation,
      expiredDate: food.expiredDate,
      additionalNotes: food.additionalNotes,
      donatorName: user?.displayName,
      donatorImage: user?.photoURL,
      email: user?.email,
      foodStatus: foodStatus,
    };

    fetch("http://localhost:5000/add-food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFoodItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="my-10 space-y-16 px-4">
      <div
        className="bg-cover h-[300px] text-white rounded-lg"
        style={{
          backgroundImage: `url('https://i.ibb.co/T0M3jXw/banner-7.jpg')`,
        }}
      >
        <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) 100%); rounded-lg bg-opacity-90 h-full">
          <div className="pt-32 pl-20">
            <h3 className="text-5xl font-bold">Add Food</h3>
          </div>
        </div>
      </div>
      <form
        className="max-w-xl md:max-w-2xl space-y-5 mx-auto p-4 md:p-12 bg-red-100 shadow-lg rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block text-gray-600 font-semibold">Food Name</label>
          <input
            type="text"
            name="foodName"
            className="input w-full"
            {...register("foodName")}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Food Image URL
          </label>
          <input
            type="text"
            name="foodImage"
            className="input w-full"
            {...register("foodImage")}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Food Quantity
          </label>
          <input
            type="number"
            name="foodQuantity"
            className="input w-full"
            {...register("foodQuantity")}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Pickup Location
          </label>
          <input
            type="text"
            name="pickupLocation"
            className="input w-full"
            {...register("pickupLocation")}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Expired Date
          </label>
          <input
            type="datetime-local"
            name="expiredDate"
            className="input w-full"
            {...register("expiredDate")}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            className="textarea w-full h-[50px]"
            {...register("additionalNotes")}
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Donator Name
          </label>
          <input
            type="text"
            readOnly
            value={user?.displayName}
            className="input w-full"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Donator Email
          </label>
          <input
            type="text"
            readOnly
            value={user?.email}
            className="input w-full"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Donator Image
          </label>
          <input
            type="text"
            readOnly
            value={user?.photoURL}
            className="input w-full"
          />
        </div>

        <div>
          <label className="block text-gray-600 font-semibold">
            Food Status
          </label>
          <input
            type="text"
            name="foodStatus"
            className="input w-full"
            value={foodStatus}
          />
        </div>

        <input
          type="submit"
          value="Add Food"
          className="w-full px-4 py-2 btn text-white text-lg capitalize bg-red-500 rounded-md shadow hover:bg-red-700"
        />
      </form>
    </div>
  );
};

export default AddFood;
