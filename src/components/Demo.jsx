import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import Hero from "../components/Hero";
import Care from "../components/Care";
import Expert from "../components/Expert";
import Week from "../components/Week";

const Demo = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("/plants.json")
            .then((res) => res.json())
            .then((data) => setPlants(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="space-y-10">

            {/* Top Rated Indoor Plants  */}
            <section className=" w-full mx-auto px-4">
                {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8"> */}


                <div className="flex justify-center gap-10">
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center  bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className=" text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Demo;
