import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <Navbar></Navbar>
      <main className="min-h-[80vh]">
        {" "}
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
