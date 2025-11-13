import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="card bg-base-100 max-w-screen-2xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src="https://i.ibb.co.com/hJCwrwpV/A-funny-cartoon-cupcake-that-d.jpg"
          alt=""
          className="rounded-xl w-fit max-h-[500px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl ">Oops, page not found!</h2>
        <p>The page you are looking for is not available.</p>

        <Link to="/" className="btn border-none bg-primary text-black">
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
