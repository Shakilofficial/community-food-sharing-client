import { useEffect, useState } from "react";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFood = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [searchFood, setSearchFood] = useState("");
  const [sortedFoods, setSortedFoods] = useState(availableFoods);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setAvailableFoods(data);
        setSortedFoods(data);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchFood(event.target.value);
    const filteredFoods = availableFoods.filter((food) =>
      food.foodName.toLowerCase().includes(event.target.value.toLowerCase()) // Adjust the field name
    );
    setSortedFoods(filteredFoods);
  };

  const handleSort = () => {
    const sortedFoodsCopy = [...sortedFoods];
    sortedFoodsCopy.sort((a, b) => new Date(a.expiredDate) - new Date(b.expiredDate)); // Adjust the field name
    setSortedFoods(sortedFoodsCopy);
  };

  return (
    <div className="my-10 space-y-16 px-4">
      <div
        className="bg-cover h-[300px] text-white rounded-lg"
        style={{ backgroundImage: `url('https://i.ibb.co/MDW6Tzc/banner-3.jpg')` }}
      >
        <div className="bg-gradient-to-r from-[#151515] to-rgba(21, 21, 21, 0.00) 100%); rounded-lg bg-opacity-90 h-full">
          <div className="pt-32 pl-20">
            <h3 className="text-5xl font-bold">Available Food</h3>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-4 items-center px-8 mb-4">
          <input
            type="text"
            placeholder="Search by Food Name"
            value={searchFood}
            onChange={handleSearch}
            className="p-2 border-2 text-sm border-red-600 text-black rounded"
          />
          <button onClick={handleSort} className="px-4 py-2 bg-red-500 text-sm text-white rounded">
            Sort by Expire Date
          </button>
        </div>
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {sortedFoods.map((availableFood) => (
            <AvailableFoodCard
              key={availableFood._id}
              availableFood={availableFood}
            ></AvailableFoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
