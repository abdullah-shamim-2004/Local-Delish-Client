import React from "react";
import ReviewCard from "../../Components/Reviews/ReviewCard";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import useFetch from "../../Hooks/useFetch";
import { Link } from "react-router";

const Home = () => {
  const { data: reviews, loading, error } = useFetch("/reviews");

  if (loading) return <Loader></Loader>;
  if (error) return <ErrorPage></ErrorPage>;

  return (
   <div>
      {" "}
      <div className="my-10">
        <div className="text-center space-y-2">
          <h1 className="text-4xl text-primary font-bold mb-1.5">
            Popular Winter Care Services
          </h1>
          <p className="text-gray-700">
            Explore All Winter Care Services in service page.
          </p>
        </div>

        <div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5">
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
    </div>
  );
};

export default Home;
