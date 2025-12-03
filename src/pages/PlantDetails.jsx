import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import Loading from "../components/Loading";

const PlantDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        fetch("/plants.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((p) => p.plantId === parseInt(id));
                setPlant(found);
            });
    }, [id]);

    const handleBook = (e) => {
        e.preventDefault();
        toast.success("Consultation booked successfully!");
        e.target.reset();
    };

    if (!plant) return <Loading></Loading>;

    return (
        <div className="max-w-5xl mx-auto py-16 px-4">
            <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full md:h-[500px] h-[300px] object-cover rounded-xl shadow mb-6"
            />
            <h1 className="text-4xl font-bold text-orange-800 mb-3">{plant.plantName}</h1>
            <p className="text-black text-[18px] mb-4">{plant.description}</p>
            <p className="font-bold text-green-600 text-lg mb-2">Price ${plant.price}</p>
            <p className="text-sm text-orange-700 mb-6">
                Rating: {plant.rating} ⭐ | Stock: {plant.availableStock} | Care Level: {plant.careLevel}
            </p>

            <h2 className="text-2xl font-semibold mb-4">Book Consultation</h2>
            <form onSubmit={handleBook} className="space-y-3 max-w-md">
                <input type="text" name="name" placeholder="Your Name" required className="w-full border border-orange-700 rounded p-2" />
                <input type="email" name="email" placeholder="Your Email" required className="w-full border  border-orange-700 rounded p-2" />
                <button type="submit" className="bg-orange-800 text-white px-6 py-2 rounded hover:bg-green-600">
                    Book Now
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default PlantDetails;
