import { useContext, useEffect, useState } from "react";
import TableData from "../../components/TableData/TableData";
import { AuthContext } from "../../providers/AuthProvider";

const ManageMyFood = () => {
  const { user } = useContext(AuthContext);
  const [manageFoods, setManageFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/manageFood?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setManageFoods(data);
      });
  }, [user]);

  return (
    <div className="my-10 space-y-16 px-4">
      <div
        className="bg-cover h-[300px] text-white rounded-lg"
        style={{
          backgroundImage: `url('https://i.ibb.co/tMf7zLp/banner-2.jpg')`,
        }}
      >
        <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) 100%); rounded-lg bg-opacity-90 h-full">
          <div className="pt-32 pl-20">
            <h3 className="text-5xl font-bold">Manage My Food</h3>
          </div>
        </div>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl text-center font-semibold">Food Table</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">Food Name</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Exp. Date</th>
                <th className="p-3">Location</th>
                <th className="p-3">Status</th>
                <th className="p-3">Donar</th>
                <th className="p-3">Action</th>
                <th className="p-3">Action</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {manageFoods.map((food) => (
                <TableData
                  key={food._id}
                  food={food}
                  manageFoods={manageFoods}
                  setManageFoods={setManageFoods}
                ></TableData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMyFood;
