import React from "react";
import useAuth from "../../Hooks/useAuth";
import Loader from "../Loader/Loader";
import { FaUsers } from "react-icons/fa";
import useFetch from "../../Hooks/useFetch";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { NavLink } from "react-router";
const DashboardHome = () => {
  const { user, loading } = useAuth();
  const { data: analylics } = useFetch("/data-analytics");
  // console.log(analylics);

  // console.log(user);

  if (loading) return <Loader></Loader>;
  return (
    <div className="min-h-[80vh] px-4 md:px-8 py-10 bg-base-200">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 mt-2">
          A quick snapshot of your activity on LocalDelish
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* User Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-2">
                <img src={user?.photoURL || ""} alt="User" />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {user?.displayName}
              </h2>
              <p className="text-sm text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Total Reviews */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
              <FaUsers className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Reviews</p>
              <h2 className="text-3xl font-bold text-gray-800">
                {analylics.totalReviews}
              </h2>
            </div>
          </div>
        </div>

        {/* Total Favorites */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-pink-100 text-pink-600">
              <MdOutlineFavoriteBorder className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Favorites</p>
              <h2 className="text-3xl font-bold text-gray-800">
                {analylics.totalFavorites}
              </h2>
            </div>
          </div>
        </div>
        {/* Add Review */}
        <NavLink
          to={"/dashboard/add-reviews"}
          className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-green-100 text-green-500">
              <IoMdAddCircleOutline className="text-2xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500"></p>
              <h2 className="text-2xl font-bold text-gray-800">
                {/* {analylics.totalFavorites} */}
                Add Your Review
              </h2>
            </div>
          </div>
        </NavLink>

        {/* Optional: Extra Card (Future Ready) */}
        {/* <div className="bg-gradient-to-br from-primary to-indigo-500 rounded-2xl p-6 text-white shadow-md hover:shadow-xl transition-all duration-300">
          <p className="text-sm opacity-90">Keep Exploring</p>
          <h2 className="text-xl font-semibold mt-2">
            Discover new local flavors 🍽️
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardHome;
