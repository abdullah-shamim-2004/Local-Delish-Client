import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AllReview from "../Pages/Reviews/AllReview";
import AddReview from "../Pages/Reviews/AddReview";
import MyReview from "../Pages/Reviews/MyReview";
import ReviewDetails from "../Pages/Reviews/ReviewDetails";
import EditReview from "../Pages/Reviews/EditReview";
import Favorites from "../Pages/Reviews/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/reviews",
        element: <AllReview></AllReview>,
      },
      {
        path: "/reviews/:id",
        element: <ReviewDetails></ReviewDetails>,
      },
      {
        path: "/edit-reviews/:id",
        element: <EditReview></EditReview>,
      },
      {
        path: "/add-reviews",
        element: <AddReview></AddReview>,
      },
      {
        path: "/my-reviews",
        element: <MyReview></MyReview>,
      },
      {
        path: "/my-favorites",
        element: <Favorites></Favorites>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
