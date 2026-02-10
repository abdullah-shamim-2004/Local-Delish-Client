import React from "react";
import { useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";

const ReviewDetails = () => {
  const { id } = useParams();

  const { data: review, loading, error } = useFetch(`/reviews/${id}`);

  if (error) return <ErrorPage></ErrorPage>;
  const singleReview = review?.review || review;
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="card card-side mt-2 bg-base-100 shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden">
          {/* Image Section */}
          <figure className="md:w-1/3">
            <img
              src={singleReview.foodImage}
              alt={singleReview.foodName}
              className="h-full w-full object-cover"
            />
          </figure>

          <div className="card-body  md:w-2/3 p-6 flex flex-col ">
            {/* Food */}
            <div>
              <h2 className="text-2xl font-bold text-secondary">
                {singleReview.foodName}
              </h2>
              <p className="text-sm text-base-content">
                {singleReview.restaurantName} —{" "}
                <span className="italic">{singleReview.location}</span>
              </p>
              {/* Review Text */}
              <p className="mt-3 text-base-content leading-relaxed">
                {singleReview.reviewText}
              </p>
            </div>

            {/* Footer Section */}
            <div className="mt-4 flex flex-wrap items-center justify-between">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <span className="bg-secondary text-white px-3 py-1 rounded-full font-medium">
                  {singleReview.rating}/5
                </span>
              </div>

              {/* Reviewer Info */}
              <div className="text-right text-sm text-base-content">
                <p>
                  <span className="font-semibold text-base-content">
                    {singleReview.userName}
                  </span>{" "}
                  ({singleReview.userEmail})
                </p>
                <p className="text-xs">
                  Posted on{" "}
                  {new Date(singleReview.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewDetails;
