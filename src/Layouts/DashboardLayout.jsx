import React from "react";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { IoAddCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen lg:max-w-10/12 ms-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4">Dashboard </div>
          </nav>
          {/* page content */}
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <aside className="min-h-full bg-base-100 border-r border-base-300 shadow-md transition-all duration-300 is-drawer-close:w-16 is-drawer-open:w-64">
            {/* Brand */}
            <Link
              to={"/"}
              className="flex items-center gap-2 px-4 py-5 border-b border-base-300"
            >
              <FaUtensils className="text-xl text-primary" />
              <h2 className="text-lg font-bold is-drawer-close:hidden">
                Local<span className="text-primary">Delish</span>
              </h2>
            </Link>

            {/* Menu */}
            <ul className="menu gap-1 px-3 py-4 text-sm font-medium">
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-primary/10 hover:text-primary"
                  title="Homepage"
                >
                  <IoMdHome size={20} />
                  <span className="is-drawer-close:hidden">Homepage</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/add-reviews"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-primary/10 hover:text-primary"
                  title="Add Review"
                >
                  <IoAddCircleOutline size={20} />
                  <span className="is-drawer-close:hidden">Add Review</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/my-reviews"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-primary/10 hover:text-primary"
                  title="My Reviews"
                >
                  <HiOutlineChatBubbleBottomCenterText size={20} />
                  <span className="is-drawer-close:hidden">My Reviews</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/my-favorites"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-primary/10 hover:text-primary"
                  title="My Favorites"
                >
                  <BsBookmarkHeartFill size={18} />
                  <span className="is-drawer-close:hidden">My Favorites</span>
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
