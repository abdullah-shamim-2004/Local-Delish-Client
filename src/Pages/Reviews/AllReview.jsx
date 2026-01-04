import React, { useEffect, useState } from "react";
import ReviewCard from "../../Components/Reviews/ReviewCard";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";

const AllReview = () => {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const limit = 8;
  console.log(rating, location, sort, page);

  const {
    data: reviews,
    loading,
    error,
  } = useFetch(
    `/reviews?search=${search}&rating=${rating}&location=${location}&sort=${sort}&page=${page}&limit=${limit}`
  );
  const handleSearching = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsSearching(false), 400);
    return () => clearTimeout(timer);
  }, [search]);
  const showLoader = loading || isSearching;

  if (error) return <ErrorPage></ErrorPage>;

  return (
    <div className="min-h-[80vh]">
      <div className="flex flex-col items-center text-center my-10">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-primary mb-3">
          All Reviews
        </h1>
        <p className="text-gray-600 max-w-xl">
          Discover honest opinions from our foodie community — explore every
          bite, every story!
        </p>
        <div className="w-24 h-1 bg-amber-400 rounded-full mt-4"></div>
      </div>

      <div className="my-3.5 mb-4 flex justify-around items-center">
        <h3 className="text-xl lg:text-2xl font-semibold">
          (<span>{reviews.length}</span>) Review Found
        </h3>
        <select
          className="select select-bordered"
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">All Ratings</option>
          <option value="5">5 Star</option>
          <option value="4">4+ Star</option>
        </select>

        <select
          className="select select-bordered"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Khulna">Khulna</option>
        </select>
        <select
          className="select select-bordered"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="rating">Highest Rating</option>
        </select>

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
      <div className="flex justify-center gap-2 mt-8">
        <button disabled={page == 1} onClick={() => setPage(page - 1)}>
          <FaArrowLeft />
        </button>
        {page}
        <button onClick={() => setPage(page + 1)}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AllReview;
