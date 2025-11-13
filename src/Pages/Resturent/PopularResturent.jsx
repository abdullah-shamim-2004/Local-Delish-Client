import axios from "axios";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const PopularResturent = () => {
  const [resturents, setResturents] = useState([]);

//This data(popular resturents) come from public folder, Developer don't store this data in mongodb. 
  useEffect(() => {
    axios("../PopularResturent.json")
      .then((res) => setResturents(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="px-4 py-12 bg-base-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary">
          Most Popular Resturent
        </h2>
        <p className="text-gray-500 mt-2">Here is the most popular Resturent</p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-2.5 ">
        {resturents.map((data) => (
          <div
            key={data.id}
            className="card w-fit  shadow-sm hover:shadow-xl/20"
          >
            <figure>
              <img
                className="rounded-t-xl"
                src={data.photo}
                alt="resturent photo"
              />
            </figure>
            <div className="card-body bg-primary">
              <h2 className="card-title">{data.name}</h2>
              <p className="text-gray-800">{data.location}</p>
              <div className="flex justify-between">
                <div className=" flex w-fit">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(data.rating)
                          ? "text-black fill-gray-900"
                          : "text-black"
                      }
                    />
                  ))}
                </div>
                <button className="cursor-pointer bg-black text-gray-100 px-1.5 py-1 ">
                  {data.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularResturent;
