import React, { useEffect, useState } from "react";
import ReviewCard from "../../Components/Reviews/ReviewCard";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import AOS from "aos";
import "aos/dist/aos.css";


const AllReview = () => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const {
    data: reviews,
    loading,
    error,
  } = useFetch(`/reviews?search=${search}`);
  const handleSearching = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
  };
  setTimeout(() => {
    setIsSearching(false);
  }, 500);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const showLoader = loading || isSearching;

  if (error) return <ErrorPage></ErrorPage>;

  return (
    <div className="min-h-[80vh]">
      <div className="flex flex-col items-center my-8 ">
        <h1 className="text-2xl text-primary lg:text-5xl font-bold mb-1.5">
          All Review
        </h1>
        <p className="text-gray-700 ">Explore All Review here</p>
      </div>

      <div className="my-3.5 mb-4 flex justify-between items-center">
        <h3 className="text-xl lg:text-2xl font-semibold">
          (<span>{reviews.length}</span>) Review Found
        </h3>
        <label className="input flex items-center border rounded-md px-2">
          <svg
            className="h-[1em] opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handleSearching}
            type="search"
            placeholder="Search"
            className="outline-none w-full"
          />
        </label>
      </div>
      {showLoader ? (
        <Loader></Loader>
      ) : reviews.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] text-center">
          <h2 className="text-4xl font-bold text-gray-600 mb-3">
            No Review Found
          </h2>
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReview;
