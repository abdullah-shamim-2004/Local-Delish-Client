
import React from "react";
import { Link } from "react-router";

const JoinCommunity = () => {
  return (
    <section className="bg-base-200 py-16 px-6 text-center rounded-xl shadow-md mx-4 md:mx-16 mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Join thousands of local food lovers!
      </h2>

    
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Share your favorite restaurants, dishes, and reviews with the community.
        Connect with food enthusiasts and explore hidden gems around your city!
      </p>

   
      <Link to="/auth/register">
        <button className="bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition transform duration-300">
          Join Now
        </button>
      </Link>
    </section>
  );
};

export default JoinCommunity;
