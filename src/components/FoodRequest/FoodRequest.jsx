import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const FoodRequest = ({ food }) => {
  const { user } = UseAuth();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  console.log(id);
  const onSubmit = (data) => {
    console.log(data);

    const requestFood = {
      foodId: food._id,
      foodImage: food.foodImage,
      foodName: food.foodName,
      foodQuantity: food.foodQuantity,
      expiredDate: food.expiredDate,
      donator: food.donator,
      pickupLocation: food.pickupLocation,
      userId: user?.userId,
      email: user?.email,
      name: user?.displayName,
      image: user?.photoURL,
      requestDate: new Date().toISOString(),
      additionalNotes: data.additionalNotes,
      donationMoney: data.donationMoney,
    };

    fetch(`https://community-food-sharing-server-theta.vercel.app/request/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-center underline">
        Make a Food Request
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Name
            </label>
            <input
              type="text"
              readOnly
              value={food.foodName}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Image
            </label>
            <input
              type="text"
              readOnly
              value={food.foodImage}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Id
            </label>
            <input
              type="text"
              readOnly
              value={food._id}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Donator Name
            </label>
            <input
              type="text"
              readOnly
              value={food.donatorName}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="text"
              readOnly
              value={user?.email}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Request Date
            </label>
            <input
              type="text"
              readOnly
              value={new Date().toLocaleString()}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pickup Location
            </label>
            <input
              type="text"
              readOnly
              value={food.pickupLocation}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Expire Date
            </label>
            <input
              type="text"
              readOnly
              value={food.expiredDate}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Notes
            </label>
            <input
              type="text"
              {...register("additionalNotes")}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Donation Money
            </label>
            <input
              type="text"
              {...register("donationMoney")}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <button
          className="px-4 py-2 bg-red-500 text-sm text-white rounded"
          type="submit"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default FoodRequest;
