const SingleFoodCard = ({ item, handleUpdateStatus }) => {
  const { _id, name, image, email, requestDate, status } = item;
  return (
    <div className="p-5 shadow-lg rounded-md">
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">{email}</div>
          <div className="text-sm opacity-50">{requestDate} </div>
          <div className="mt-4">
            {status === "Delivered" ? (
              <span className="btn px-2 py-1 bg-red-800 text-white font-semibold btn-sm">
                Delivered
              </span>
            ) : (
              <button
                onClick={() => handleUpdateStatus(_id)}
                className="btn px-2 py-1 bg-red-500 text-white font-semibold btn-sm"
              >
                Mark as Delivered
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodCard;
