import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  useEffect(() => {
    fetch("featuredFoods.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedFeaturedFoods = data.sort(
          (a, b) => b.foodQuantity - a.foodQuantity
        );
        const top6FeaturedFoods = sortedFeaturedFoods.slice(0, 6);
        setFeaturedFoods(top6FeaturedFoods);
      });
  }, []);

  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <h4 className="text-xl text-red-500 font-bold mb-6">Featured Foods</h4>
        <h2 className="text-5xl font-bold mb-8 text-center">
          Featured Foods represent the <br />
          highest quantity of food options available.
        </h2>
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featuredFoods.map((featuredFood) => (
            <FeaturedFoodCard
              key={featuredFood.id}
              featuredFood={featuredFood}
            ></FeaturedFoodCard>
          ))}
        </div>
        <Link to="/available-foods">
          <button className="px-8 py-2 bg-red-500 font-semibold rounded hover:bg-red-800 hover:text-white dark:bg-red-500 dark:text-black">
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedFoods;
