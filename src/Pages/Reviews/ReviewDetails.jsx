import React from "react";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
// import useSecure from "../../Hooks/useSecure";

const ReviewDetails = () => {
  const { id } = useParams();
  //   console.log(id);

  const { data: review, loading, error } = useFetch(`/reviews/${id}`);

  if (loading) return <Loader></Loader>;
  if (error) return <ErrorPage></ErrorPage>;
  const singleReview = review.review;
  //   console.log(review.review);

  return (
    <div className="card card-side bg-base-100 shadow-md hover:shadow-lg transition duration-300 rounded-2xl overflow-hidden">
      {/* Image Section */}
      <figure className="w-1/3">
        <img
          src={singleReview.foodImage}
          alt={singleReview.foodName}
          className="h-full w-full object-cover"
        />
      </figure>

      {/* Content Section */}
      <div className="card-body bg-amber-400 w-2/3 p-6 flex flex-col ">
        {/* Food & Restaurant */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {singleReview.foodName}
          </h2>
          <p className="text-sm text-gray-500">
            🍽️ {singleReview.restaurantName} —{" "}
            <span className="italic">{singleReview.location}</span>
          </p>
            {/* Review Text */}
          <p className="mt-3 text-gray-700 leading-relaxed">
            {singleReview.reviewText}
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-4 flex flex-wrap items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
              ⭐ {singleReview.rating}/5
            </span>
          </div>

          {/* Reviewer Info */}
          <div className="text-right text-sm text-gray-500">
            <p>
              <span className="font-semibold text-gray-700">
                👤 {singleReview.userName}
              </span>{" "}
              ({singleReview.userEmail})
            </p>
            <p className="text-xs">
              📅 Posted on{" "}
              {new Date(singleReview.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
