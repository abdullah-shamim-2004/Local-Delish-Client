import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";

const Bannar = ({ reviews }) => {
  return (
    <div className="w-full">
      {reviews && reviews.length > 0 && (
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          className="h-[80vh]"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div
                className="relative h-[80vh] w-full bg-center bg-cover flex items-center justify-center"
                style={{ backgroundImage: `url(${review.foodImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-2xl">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                    {review.reviewText}
                  </h1>
                  <p className="text-sm md:text-lg text-gray-200 mb-6">
                    {review.reviewText}
                  </p>
                  <div className="flex flex-row gap-3 justify-center">
                    <Link to="/Reviews">
                      <button className="bg-primary cursor-pointer text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition transform duration-300">
                        View Reviews
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300">
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Bannar;
