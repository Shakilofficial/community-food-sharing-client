import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableData = ({ food, setManageFoods }) => {
  const {
    _id,
    donatorName,
    expiredDate,
    foodName,
    foodQuantity,
    foodStatus,
    pickupLocation,
  } = food;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Item deleted successfully", data);
            setManageFoods((prevFoods) =>
              prevFoods.filter((item) => item._id !== id)
            );

            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          });
      }
    });
  };
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
      <td className="p-3">
        <p>{foodName} </p>
      </td>
      <td className="p-3">
        <p>{foodQuantity}</p>
      </td>
      <td className="p-3">
        <p>{expiredDate} </p>
      </td>
      <td className="p-3">
        <p>{pickupLocation} </p>
      </td>
      <td className="p-3">
        <p>{foodStatus} </p>
      </td>
      <td className="p-3">
        <p>{donatorName} </p>
      </td>
      <td className="p-3">
        <Link to={`/food-requests/${_id}`}>
          <button className="btn px-2 py-1 bg-red-800 text-white font-semibold btn-sm">
            Manage
          </button>
        </Link>
      </td>
      <td className="p-3">
        <Link to={`/manage-my-foods/${_id}`}>
          <button className="btn px-2 py-1 bg-red-800 text-white font-semibold btn-sm">
            Edit
          </button>
        </Link>
      </td>
      <td className="p-3">
        <button
          onClick={() => handleDelete(_id)}
          className="btn px-2 py-1 bg-red-800 text-white font-semibold btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableData;
