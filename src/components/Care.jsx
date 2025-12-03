import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const Care = () => {
    const [loading, setLoading] = useState(true);
    const [tips, setTips] = useState([]);

    useEffect(() => {
        fetch('/tips.json')
            .then((res) => res.json())
            .then((data) => {
                setTips(data);
                setLoading(false)
            }
            )
            .catch((err) => {
                setLoading(false)
                console.error("Error loading JSON:", err)
            });
    }, []);

    if(loading) {
        return <Loading/>
    }

    return (
        <section className="py-16 px-6 md:px-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-700">
                    Plant Care Tips 🌿
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-[18px] font-bold">
                    Keep your plants healthy and happy with these simple care guidelines.
                </p>
            </div>

            {/* Tips Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tips.map((tip) => (
                    <div
                        key={tip.id}
                        className={`${tip.color} rounded-2xl shadow-lg p-2 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}
                    >
                        <img
                            src={tip.image}
                            alt={tip.title}
                            className="w-[95%] md:h-[17rem] h-[8rem] object-cover mb-4 rounded-2xl"
                        />
                        <h3 className="text-2xl font-semibold text-green-800  mb-2">
                            {tip.title}
                        </h3>
                        <p className="text-black text-[18px]">{tip.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Care;
