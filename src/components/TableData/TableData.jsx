import { Link } from "react-router-dom";

const TableData = ({ food, handleEdit, handleDelete }) => {
  const {
    _id,
    donatorName,
    expiredDate,
    foodName,
    foodQuantity,
    foodStatus,
    pickupLocation,
  } = food;

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
        <p className="dark:text-gray-400">Friday</p>
      </td>
      <td className="p-3">
        <p>{pickupLocation} </p>
        <p className="dark:text-gray-400">Tuesday</p>
      </td>
      <td className="p-3">
        <p>{foodStatus} </p>
        <p className="dark:text-gray-400">Tuesday</p>
      </td>
      <td className="p-3">
        <p>{donatorName} </p>
      </td>
      <td className="p-3">
        <Link to={`/manage-my-foods/${_id}`}>
          <button
            onClick={() => handleEdit(_id)}
            className="btn px-2 py-1 bg-red-800 text-white font-semibold btn-sm"
          >
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
