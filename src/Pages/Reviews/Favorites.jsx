import Swal from "sweetalert2";

import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";

import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import { toast, ToastContainer } from "react-toastify";

const Favorites = () => {
  const { user } = useAuth();
  const [favorite, setFavorite] = useState([]);

  const {
    data: favoriteData,
    loading,
    error,
  } = useFetch(`/my-favorites?email=${user?.email}`);

  useEffect(() => {
    if (favoriteData) setFavorite(favoriteData);
  }, [favoriteData]);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const handleDelete = () => {
    toast.warning("Sorry! Developer do not impliment Delete function");
  };
  return (
    <div className="p-6 max-[576px]:p-1.5 max-[576px]:w-fit">
      <ToastContainer></ToastContainer>
      <h2 className="text-2xl font-bold mb-4">
        My Reviews ({favorite.length})
      </h2>

      <div className="md:overflow-x-auto max-[576px]:w-fit">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Restaurant</th>
              <th>Posted Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {favorite.map((fav) => (
              <tr key={fav._id}>
                <td>
                  <img
                    src={fav.foodImage}
                    alt={fav.foodName}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td>{fav.foodName}</td>
                <td>{fav.restaurantName}</td>
                <td>{new Date(fav.createdAt).toLocaleDateString()}</td>

                <td className="flex gap-2">
                  {/* <Link
                    to={`/edit-reviews/${review._id}`}
                    className="btn btn-sm btn-outline btn-info"
                  >
                    Edit
                  </Link> */}
                  <button
                    onClick={() => handleDelete()}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorites;
