import React from "react";
import { FaMapMarkerAlt, FaUtensils, FaHeart, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content py-12">
    
      <section className="text-center max-w-4xl mx-auto px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          About <span className="text-secondary">LocalDelish</span>
        </h1>
        <p className="text-lg text-gray-600">
          LocalDelish is your go-to destination to explore the best restaurants, 
          hidden street food gems, and authentic local dishes around you.
        </p>
      </section>

    
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        <div className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <FaUtensils className="text-4xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to bring food lovers and local restaurants closer together. 
            Whether it’s a small roadside stall or a fine-dining place, 
            LocalDelish helps you find authentic flavors loved by locals.
          </p>
        </div>

        <div className="bg-base-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <FaHeart className="text-4xl text-secondary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Why We Love Local</h2>
          <p className="text-gray-600 leading-relaxed">
            We believe every city has its own food culture worth celebrating. 
            LocalDelish celebrates those unsung heroes — the chefs, street vendors, 
            and family-owned restaurants that make local food truly special.
          </p>
        </div>
      </section>

     
      <section className="max-w-5xl mx-auto mt-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-primary">Join Our Foodie Community</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Become part of a growing community that loves to share honest reviews, 
          photos, and experiences about local cuisines. 
          Discover places that you’ll want to visit again and again!
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-base-100 p-6 rounded-xl shadow-md w-64 hover:scale-105 transition">
            <FaUsers className="text-3xl text-primary mb-3 mx-auto" />
            <h3 className="font-semibold mb-1">10K+ Food Lovers</h3>
            <p className="text-sm text-gray-500">Sharing their honest reviews</p>
          </div>
          <div className="bg-base-100 p-6 rounded-xl shadow-md w-64 hover:scale-105 transition">
            <FaMapMarkerAlt className="text-3xl text-secondary mb-3 mx-auto" />
            <h3 className="font-semibold mb-1">500+ Local Spots</h3>
            <p className="text-sm text-gray-500">Discovered & recommended</p>
          </div>
        </div>
      </section>

 
      <section className="text-center mt-16 bg-gradient-to-r from-orange-400 to-yellow-500 text-white py-12 rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Let’s Explore Together!</h2>
        <p className="text-lg mb-6">
          Find your next favorite meal — from hidden street food gems to top-rated restaurants.
        </p>
        <button className="btn bg-white text-black border-none hover:bg-gray-100">
          Start Exploring 🍴
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
