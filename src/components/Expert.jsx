import React, { useEffect, useState } from 'react';
import Loading from './Loading';


function Expert() {
    const [Experts, setExperts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/expert.json')
            .then(res => res.json())
            .then(data => {
                setExperts(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [Experts]);

    if (loading) {
        return <Loading> </Loading>
    }
    //
    return (
        <section className="bg-linear-to-r from-transparent to-[#171e33]/50   mx-auto px-4  py-10 rounded-2xl">
            <h2 className="title  text-center md:mb-10 mb-5">
                Meet Our Green Experts 👩
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center relative z-10">
                {Experts.map((expert, i) => (
                    // Key changes here: relative, p-1, and the custom class
                    <div
                        key={i}
                        className="relative animated-border-wrap p-1 rounded-xl shadow-md transition"
                    >
                        {/* The content div sits on top of the border effect */}
                        <div className="bg- p-6 rounded-xl hover:shadow-lg transition">
                            <img
                                src={expert.img}
                                alt={expert.name}
                                className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-3 border-orange-600"
                            />
                            <h3 className="text-2xl font-semibold text-white mb-2">{expert.name}</h3>
                            <p className="text-gray-300 text-[18px]">{expert.role}</p>
                        </div>
                    </div>
                ))}
            </div>



        </section>
    )
}

export default Expert
