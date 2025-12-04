import React from "react";
import plant from '../data/week.json';
import { Link } from "react-router";

const Week = () => {

  return (
    <section className="bg-linear-to-r to-transparent from-[#171e33]/50  md:py-16 py-5 px-6 md:px-16 bg-green-50 rounded-2xl shadow-inner">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-700">
          Plant of the Week 🌿
        </h2>
        <p className="text-gray-600 mt-3 text-[18px] font-bold">
          This week’s top pick for your indoor garden!
        </p>
      </div>

      {/* Plant Card */}
      <div className="bg-linear-to-r to-transparent from-[#171e33]/70   flex flex-col md:flex-row items-center justify-center gap-10 bg-white p-8 rounded-2xl shadow-xl">
        {/* Image */}
        <img
          src={plant.image}
          alt={plant.name}
          className="w-64 md:w-80 h-auto object-contain rounded-xl"
        />

        {/* Content */}
        <div className="text-center md:text-left max-w-lg  ">
          <h3 className="text-2xl font-bold text-green-700 mb-2">
            {plant.name}
          </h3>
          <p className="italic text-gray-500 mb-3">“{plant.nickname}”</p>
          <p className="text-orange-700 font-bold mb-4">{plant.description}</p>

          {/* Care list */}
          <ul className="space-y-2 text-gray-700 mb-4">
            {plant.care.map((tip, i) => (
              <li key={i}> {tip}</li>
            ))}
          </ul>

          <div className="flex flex-col md:flex-row md:items-center md:gap-6">
            <p className="text-lg font-semibold text-green-700">
              ⭐ {plant.rating} / 5.0
            </p>
            <p className="text-lg font-semibold text-gray-800">
              💲 Price: ${plant.price}
            </p>
          </div>

          <Link to='/plants' className="mt-6 inline-block bg-linear-to-r from-green-500 to-orange-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
            Add to Cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Week;
