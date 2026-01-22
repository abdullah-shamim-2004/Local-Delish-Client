import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";
import ErrorPage from "../Error/ErrorPage";
import Loader from "../Loader/Loader";
import useSecure from "../../Hooks/useSecure";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const MyReview = () => {
  const { user, loading } = useAuth();
  const api = useSecure();
  const { data: reviewsData, error } = useFetch(
    `/reviews?email=${user?.email}`
  );
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);

  useEffect(() => {
    if (user?.email && reviewsData) {
      setReviews(Array.isArray(reviewsData) ? reviewsData : []);
    }
  }, [reviewsData, user]);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  // Delete Function
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this review!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e63946",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await api.delete(`/reviews/${id}`);
        if (res.data.success) {
          Swal.fire("Deleted!", "Your review has been deleted.", "success");
          setReviews(reviews.filter((r) => r._id !== id));
        }
      } catch (err) {
        Swal.fire("Error!", err.message, "error");
      }
    }
  };
  return (
    <div className="p-6 max-[576px]:p-1.5 max-[576px]:w-fit">
      <h2 className="text-2xl font-bold mb-4">
        {/* My Reviews ({reviews?.length}) */}
      </h2>

      {reviews?.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] text-center">
          <h2 className="text-4xl font-bold text-gray-600 mb-3">
            No My Review Found!
          </h2>
          <p>Please Add My Review</p>
          <Link
            className="btn-primary text-black font-normal bg-primary btn mt-1"
            to="/dashboard/add-reviews"
          >
            Click Me
          </Link>
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
                    <Link
                      to={`/dashboard/edit-reviews/${review._id}`}
                      className="btn btn-sm btn-outline btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
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

export default MyReview;
