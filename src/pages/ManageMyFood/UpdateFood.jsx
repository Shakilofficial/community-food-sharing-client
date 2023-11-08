import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateFood = () => {
  const { id } = useParams();
  console.log(id);

  // const [foodData, setFoodData] = useState({
  //   // : "",
  //   // : "",
  //   // : "",
  //   // : "",
  //   // : "",
  //   // : "",
  //   // : false,
  // });
  const [foodData, setFoodData] = useState([]);
  // // console.log(foodData);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, []);

  const foodItem = foodData.filter((food) => food._id === id);
  console.log(foodItem);

  const handleUpdateFood = async (event) => {
    event.preventDefault();

    const form = event.target; 
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;

    const foods = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
    };
    console.log(foods);

    fetch(`http://localhost:5000/manage-my-foods/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foods),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Food updated successfully");
        } else {
          console.error("Failed to update food data");
        }
      })
      .catch((error) => {
        console.error("Error updating food:", error);
      });
  };

  return (
    <div>
      <h2>Edit Food</h2>
      <form onSubmit={handleUpdateFood}>
        <div>
          <label className="block text-gray-600 font-semibold">Food Name</label>
          <input type="text" name="foodName" className="input w-full" />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">
            Food Image
          </label>
          <input type="text" name="foodImage" className="input w-full" />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">
            Food Quantity
          </label>
          <input type="number" name="foodQuantity" className="input w-full" />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">
            Pickup Location
          </label>
          <input type="text" name="pickupLocation" className="input w-full" />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">
            Expired Date
          </label>
          <input type="date" name="expiredDate" className="input w-full" />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            className="textarea w-full h-[50px]"
          />
        </div>
        <input
          type="submit"
          value="Update Food"
          className="w-full px-4 py-2 btn text-white text-lg capitalize bg-red-500 rounded-md shadow hover-bg-red-700"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
