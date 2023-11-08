import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SingleFoodCard from "./SingleFoodCard";

const ManageSingleFood = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [foodRequest, setFoodRequest] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/food-requests/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodRequest(data);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, [user]);

  const handleUpdateStatus = (id) => {
    fetch(`http://localhost:5000/food-requests/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Delivered" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const updatedFoodRequests = foodRequest.map((item) =>
            item._id === id ? { ...item, status: "Delivered" } : item
          );
          setFoodRequest(updatedFoodRequests);
        }
      })
      .catch((error) => {
        console.error("Error updating food request status:", error);
      });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-center font-bold text-4xl mb-8">
        Manage Single Food Request
      </h2>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-6">
        {foodRequest.map((item) => (
          <SingleFoodCard
            key={item._id}
            item={item}
            handleUpdateStatus={handleUpdateStatus}
          ></SingleFoodCard>
        ))}
      </div>
    </div>
  );
};

export default ManageSingleFood;
