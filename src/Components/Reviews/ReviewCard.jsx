import { Star, Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useSecure from "../../Hooks/useSecure";
import { toast, ToastContainer } from "react-toastify";
// import { useState } from "react";

const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const api = useSecure();
  // const [isFav, setIsFav] = useState(false);

  const {
    _id,
    foodName,
    foodImage,
    restaurantName,
    location,
    rating,
    userName,
    createdAt,
  } = review;

  // Favorite handler
  const handleFavorite = async () => {
    if (!user) {
      toast.warning("Please login first!");
      return;
    }

    const newfavorite = {
      userEmail: user?.email,
      foodId: _id,
      foodName,
      foodImage,
      restaurantName,
      createdAt,
    };

    try {
      const res = await api.post("/my-favorites", newfavorite);
      // console.log("Review added:", res.data);
      if (res.data.message) {
        toast.info(res.data.message);
      } else {
        toast.success("Added to favorites");
        // setIsFav(true);
      }
    } catch (err) {
      console.error(" Error adding review:", err);
      toast.error("Failed to add favorite");
    }
  };

  return (
    <div
      // data-aos="fade-up"
      className="bg-base-100 text-gray-800 max-w-lg rounded-2xl shadow-md border border-base-200 hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between"
    >
      <ToastContainer />
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-50 object-cover hover:scale-105 transition-transform duration-300"
        />

        <button
          onClick={handleFavorite}
          className="absolute cursor-pointer top-3 right-3 p-2 bg-white/70 backdrop-blur-md rounded-full hover:bg-white/90 shadow-sm transition"
        >
          <Heart
            size={20}
            // className={isFav ? "fill-red-500 text-red-500" : "text-gray-500"}
          />
        </button>
      </div>

      <h3 className="text-xl font-semibold text-base-content mb-1">{foodName}</h3>
      <p className="text-sm text-gray-500">{restaurantName}</p>
      <p className="text-xs text-gray-400 mb-2">{location}</p>

      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-600">
          ({rating.toFixed(1)})
        </span>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-100">
        <div>
          <p className="font-medium text-gray-700">{userName}</p>
          <p className="text-gray-400">
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>

        <button
          onClick={() => navigate(`/reviews/${_id}`)}
          className="flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-medium hover:scale-105 transition"
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
