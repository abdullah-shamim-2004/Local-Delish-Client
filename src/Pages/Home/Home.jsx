import React from "react";
import ReviewCard from "../../Components/Reviews/ReviewCard";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router";
import Bannar from "../../Components/Bannar/Bannar";
import PopularResturent from "../Resturent/PopularResturent";
import JoinCommunity from "../Join/JoinCommunity";

const Home = () => {
  const {
    data: reviews,
    loading,
    error,
  } = useFetch("/reviews?limit=6&sort=top");

  if (loading) return <Loader></Loader>;
  if (error) return <ErrorPage></ErrorPage>;

  return (
    <div>
      <div>
        <Bannar reviews={reviews}></Bannar>
      </div>
      <div className="mx-auto my-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl text-primary font-bold mb-1.5">
            Popular Review
          </h1>
          <p className="text-gray-700">Explore All Review in Reviews page.</p>
        </div>

        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>

        <div className="flex justify-end">
          <Link to="/reviews">
            <button className="bg-primary text-white font-semibold my-2.5  px-8 py-3 rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition transform duration-300">
              Show All
            </button>
          </Link>
        </div>
      </div>
      <PopularResturent></PopularResturent>
      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Home;
