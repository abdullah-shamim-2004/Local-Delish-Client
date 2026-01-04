import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";
import Loader from "../Loader/Loader";
import ErrorPage from "../Error/ErrorPage";
import useSecure from "../../Hooks/useSecure";
// import { toast, ToastContainer } from "react-toastify";

const Favorites = () => {
  const { user } = useAuth();
  const api = useSecure();
  const [favorite, setFavorite] = useState([]);

  const {
    data: favoriteData,
    loading,
    error,
    // refetch,
  } = useFetch(`/my-favorites?email=${user?.email}`);

  useEffect(() => {
    if (favoriteData) setFavorite(favoriteData);
  }, [favoriteData]);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  const handleDelete = async (id) => {
    // toast.warning("Sorry! Developer do not impliment Delete function");
    const conferm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (conferm.isConfirmed) {
      try {
        const res = await api.delete(`/my-favorites/${id}`);
        if (res.data.success) {
          // console.log(res.data);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      } catch (err) {
        Swal.fire("Error!", err.message, "error");
        // console.log(error);
      }
    }
  };
  return (
    <div className="p-6 max-[576px]:p-1.5 max-[576px]:w-fit">
      {/* <ToastContainer></ToastContainer> */}
      <h2 className="text-2xl font-bold mb-4">
        My Favorite Reviews ({favorite.length})
      </h2>

      {favorite.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] text-center">
          <h2 className="text-4xl font-bold text-gray-600 mb-3">
            No Favorite Review Found!
          </h2>
        </div>
      ) : (
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
                    <button
                      onClick={() => handleDelete(fav._id)}
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
      )}
    </div>
  );
};

export default Favorites;
