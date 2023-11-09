import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";

const MyFoodRequest = () => {
  const { user } = UseAuth();

  const [foodsRequest, setFoodRequest] = useState([]);

  const handleCancelRequest = (id) => {
    Swal.fire({
      title: "Cancel Request",
      text: "Are you sure you want to cancel this request?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://community-food-sharing-server-theta.vercel.app/food-requests/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "Available" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const updatedFoodRequests = foodsRequest.map((item) =>
                item._id === id ? { ...item, status: "Available" } : item
              );
              setFoodRequest(updatedFoodRequests);

              Swal.fire(
                "Request Canceled",
                "Your request has been canceled.",
                "success"
              );
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://community-food-sharing-server-theta.vercel.app/food-requests/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoodRequest(data);
      })
      .catch((error) => {
        console.error("Error fetching food data:", error);
      });
  }, [user]);

  console.log(foodsRequest);

  return (
    <div className="my-10 space-y-16 px-4">
      <div
        className="bg-cover h-[300px] text-white rounded-lg"
        style={{
          backgroundImage: `url('https://i.ibb.co/stFxmSh/banner-6.png')`,
        }}
      >
        <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) rounded-lg bg-opacity-90 h-full">
          <div className="pt-32 pl-20">
            <h3 className="text-5xl font-bold">My Food Request</h3>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {foodsRequest.map((request) => (
          <div key={request._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Donor Information</h2>
              <p>Donor Name: {request.name}</p>
              <p>Pickup Location: {request.pickupLocation}</p>
              <p>Expire Date: {request.expiredDate}</p>
              <p>Request Date: {request.requestDate}</p>
              <p>Your Donation Amount: {request.donationMoney}</p>
              <p>Status: {request.status}</p>
              {request.status === "Delivered" && (
                <button
                  className="btn px-2 py-1 bg-red-800 text-white font-semibold btn-md"
                  onClick={() => handleCancelRequest(request._id)}
                >
                  Cancel Request
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
