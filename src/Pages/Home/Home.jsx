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
  } = useFetch("/reviews?limit=8&sort=top");

  if (loading) return <Loader></Loader>;
  if (error) return <ErrorPage></ErrorPage>;

  return (
    <div>
      <div>
        <Bannar reviews={reviews}></Bannar>
      </div>
      <div className="mx-auto my-8">
        <div className="text-center my-10">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-primary mb-3">
            Featured Reviews
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Handpicked food stories and top-rated dishes — see what’s trending
            in the LocalDelish community!
          </p>
          <div className="w-24 h-1 bg-amber-400 rounded-full mt-4 mx-auto"></div>
        </div>

        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
          {reviews?.reviews?.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>

        <div className="flex justify-end">
          <Link to="/reviews">
            <button className="bg-primary cursor-pointer text-white font-semibold my-2.5  px-8 py-3 rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition transform duration-300">
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
