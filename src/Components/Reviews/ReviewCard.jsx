import { Star, Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
// import { useState } from "react";

const ReviewCard = ({ review }) => {
  //onFavorite
  const navigate = useNavigate();
  //   const [isFav, setIsFav] = useState(false);

  const {
    _id,
    foodName,
    foodImage,
    restaurantName,
    location,
    rating,
    reviewText,
    userName,
    createdAt,
  } = review;

  // ❤️ Favorite handler
  //   const handleFavorite = () => {
  //     setIsFav(!isFav);
  //     if (onFavorite) onFavorite(review); // callback to parent
  //   };

  return (
    <div className="bg-[#111] text-white rounded-2xl shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 p-5 max-w-sm flex flex-col justify-between">
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* ❤️ Favorite Button */}
        <button
          //   onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-black/80 transition"
        >
          <Heart
            size={20}
            // className={`transition-all ${
            //   isFav ? "fill-red-500 text-red-500 scale-110" : "text-gray-300"
            // }`}
          />
        </button>
      </div>

      {/* Food Info */}
      <div>
        <h3 className="text-xl font-semibold text-gold mb-1">{foodName}</h3>
        <p className="text-sm text-gray-400">{restaurantName}</p>
        <p className="text-xs text-gray-500 mb-2">{location}</p>

        {/* ⭐ Rating */}
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

        {/* Review Text */}
        <p className="text-gray-300 text-sm italic mb-4">
          “
          {reviewText.length > 90
            ? reviewText.slice(0, 90) + "..."
            : reviewText}
          ”
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-3 border-t border-gray-800">
        <div>
          <p>👤 {userName}</p>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>

        <button
          onClick={() => navigate(`/reviews/${_id}`)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gold text-black font-medium hover:brightness-110 transition"
          style={{ backgroundColor: "hsl(38, 61%, 73%)" }}
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
