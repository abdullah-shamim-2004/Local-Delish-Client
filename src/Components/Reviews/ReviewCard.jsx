import { Star, Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useSecure from "../../Hooks/useSecure";
import { toast, ToastContainer } from "react-toastify";

const ReviewCard = ({ review }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const api = useSecure();

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
      console.log("Review added:", res.data);
      if (res.data.message) {
        toast.info(res.data.message);
      } else {
        toast.success("Added to favorites");
      }
    } catch (err) {
      console.error(" Error adding review:", err);
      toast.error("Failed to add favorite");
    }
  };

  return (
    <div className="bg-[#111] text-white max-w-md rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 p-5 flex flex-col justify-between">
      {/* Image */}
      <ToastContainer></ToastContainer>
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-50 object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-black/80 transition"
        >
          <Heart size={20} />
        </button>
      </div>

      {/* Food Info */}
      <h3 className="text-xl font-semibold text-gold mb-1">{foodName}</h3>
      <p className="text-sm text-gray-400">{restaurantName}</p>
      <p className="text-xs text-gray-500 mb-2">{location}</p>

      {/*  Rating */}
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < Math.floor(rating)
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-600"
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-300">
          ({rating.toFixed(1)})
        </span>
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-800">
        <div>
          <p>{userName}</p>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>

        <button
          onClick={() => navigate(`/reviews/${_id}`)}
          className="flex cursor-pointer items-center gap-1 px-3 py-1.5 rounded-full bg-primary text-black font-medium hover:brightness-110 transition"
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
