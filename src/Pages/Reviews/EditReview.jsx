import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useSecure from "../../Hooks/useSecure";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const EditReview = () => {
  const { id } = useParams();
  const api = useSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data: reviewsData, loading, error } = useFetch(`/reviews/${id}`);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (reviewsData) setReviews(reviewsData.review);
  }, [reviewsData]);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const restaurantName = form.resturent_name.value;
    const location = form.location.value;
    const rating = parseFloat(form.rating.value) || 4.5;
    const reviewText = form.description.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const updatedReview = {
      foodName,
      foodImage,
      restaurantName,
      location,
      rating: Number(rating.toFixed(1)),
      reviewText,
      userEmail,
      userName,
      createdAt: new Date().toISOString(),
    };
    try {
      const res = await api.put(`/reviews/${id}`, updatedReview);
      if (res.data.success) {
        Swal.fire("Updated!", "Your review has been updated.", "success");
        navigate("/my-reviews");
      }
    } catch (err) {
      Swal.fire("Error!", err.message, "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">
        Edit Review
      </h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Food Name</label>
          <input
            type="text"
            name="food_name"
            defaultValue={reviews?.foodName}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Food Image URL</label>
          <input
            type="text"
            name="food_image"
            defaultValue={reviews?.foodImage}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Restaurant Name</label>
          <input
            type="text"
            name="resturent_name"
            defaultValue={reviews?.restaurantName}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={reviews?.location}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            defaultValue={reviews?.rating}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Review Text</label>
          <textarea
            name="description"
            defaultValue={reviews?.reviewText}
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn w-full bg-primary text-black font-semibold hover:brightness-110"
        >
          Update Review
        </button>
      </form>
    </div>
  );
};

export default EditReview;
