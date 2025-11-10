import React from "react";
import useAuth from "../../Hooks/useAuth";
import useSecure from "../../Hooks/useSecure";

const AddReview = () => {
  const { user } = useAuth();
  const api = useSecure();

  const handleAddReview = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.food_name.value;
    const foodImage = form.food_image.value;
    const restaurantName = form.resturent_name.value;
    const location = form.location.value;
    const rating = parseFloat(form.rating.value) || 4.5;
    const reviewText = form.description.value;
    const userEmail = form.email.value;
    const userName = form.user_name.value;
    const newReview = {
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
      const res = await api.post("/reviews", newReview);
      console.log("Review added:", res.data);
    } catch (err) {
      console.error(" Error adding review:", err);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center py-10">
      <form
        onSubmit={handleAddReview}
        className="bg-base-100 p-8 rounded-2xl shadow-lg w-full max-w-3xl"
      >
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          type="button"
          className="btn btn-ghost mb-2 text-sm"
        >
          ← Back To Reviews
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Create <span className="text-purple-500">Your Review</span>
        </h2>

        {/* Food Name  */}
        <div>
          <label className="label font-medium">Food Name</label>
          <input
            type="text"
            name="food_name"
            placeholder="e.g. Beef Tehari"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="label font-medium">Food Image URL</label>
          <input
            type="url"
            name="food_image"
            placeholder="https://..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Resturent Name */}
        <div>
          <label className="label font-medium">Resturent Name</label>
          <input
            type="text"
            name="resturent_name"
            placeholder="e.g. Haji Biriyani House"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="label font-medium">Location</label>
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            className="input input-bordered w-full"
          />
        </div>

        {/* rating */}
        <div className="mb-4">
          <label className="label font-medium">rating</label>
          <input
            type="number"
            name="rating"
            placeholder="e.g 4.5"
            className="input input-bordered w-full"
          />
        </div>

        {/* reviewer Info */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="label font-medium">User Email</label>
            <input
              type="email"
              name="email"
              placeholder="e.g. example@email.com"
              className="input input-bordered w-full"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div>
            <label className="label font-medium">User Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="e.g. Artisan Roasters"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="label font-medium">Review Description</label>
          <textarea
            name="description"
            placeholder="e.g. Aromatic rice with juicy beef — authentic old Dhaka flavor!..."
            className="textarea textarea-bordered w-full min-h-[100px]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
