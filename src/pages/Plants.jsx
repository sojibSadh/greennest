import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const Plants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-orange-700 text-center mb-10">
        Indoor Plants Collection 🌱
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
        {plants.map((plant) => (
          <div
            key={plant.plantId}
            className="bg-gray-300  shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition  hover:border-orange-700 border-transparent"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-4 ">
              <h3 className="text-2xl text-center font-bold text-orange-900">
                {plant.plantName}
              </h3>
              <h4 className="text-[16px] font-medium text-gray-600 text-center">{plant.title}</h4>
              <div className="flex justify-between">
                <span className="btn btn-outline btn-secondary inline-block p-2 px-2 rounded-2xl ">{plant.category}</span>
                <span className="btn btn-outline btn-secondary inline-block p-2 px-2 rounded-2xl"> {plant.careLevel}</span>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500 font-medium">Plant Price  <span className="text-orange-400"> ${plant.price} </span></p>
                <div className="flex items-center gap-1 text-yellow-500 font-bold">
                  <FaStar /> {plant.rating}
                </div>
              </div>

              <div className="">
                <Link
                  to={`/plants/${plant.plantId}`}
                  className="block mt-2 bg-linear-to-r from-green-500 to-orange-700 font-bold text-white text-center py-2 rounded-lg  transition-all duration-1000 ease-in-out
                 hover:from-orange-700 hover:to-green-500 hover:scale-102"
                >
                  View Details
                </Link>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Plants;
