

import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";
import ErrorPage from "../Error/ErrorPage";
import Loader from "../Loader/Loader";

const MyReview = () => {
  const { user } = useAuth();
  const {
    data: reviews,
    loading,
    error,
  } = useFetch(`/reviews?email=${user?.email}`);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Reviews ({reviews.length})</h2>

      <div className="overflow-x-auto">
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
            {reviews.map((review) => (
              <tr key={review._id}>
                <td>
                  <img
                    src={review.foodImage}
                    alt={review.foodName}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td>{review.foodName}</td>
                <td>{review.restaurantName}</td>
                <td>{new Date(review.createdAt).toLocaleDateString()}</td>

                <td className="flex gap-2">
                  <button
                    // onClick={() => handleEdit(review)}
                    className="btn btn-sm btn-outline btn-info"
                  >
                    Edit
                  </button>
                  <button
                    // onClick={() => handleDelete(review._id)}
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

export default MyReview;
