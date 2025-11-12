import React from "react";
import ReviewCard from "../../Components/Reviews/ReviewCard";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router";
import Bannar from "../../Components/Bannar/Bannar";
import PopularResturent from "../Resturent/PopularResturent";

const Home = () => {
  const { data: reviews, loading, error } = useFetch("/reviews?limit=6");

  if (loading) return <Loader></Loader>;
  if (error) return <ErrorPage></ErrorPage>;

  return (
    <div>
      <div>
        <Bannar reviews={reviews}></Bannar>
      </div>
      <div className="my-10">
        <div className="text-center space-y-2">
          <h1 className="text-4xl text-primary font-bold mb-1.5">
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
            <button className="btn shadow-lg border-none text-white text-xl font-bold my-15 bg-primary hover:scale-105 transition ease-in-out">
              Show All
            </button>
          </Link>
        </div>
      </div>
      <PopularResturent></PopularResturent>
    </div>
  );
};

export default Home;
