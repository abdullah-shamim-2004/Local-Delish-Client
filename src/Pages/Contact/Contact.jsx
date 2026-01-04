import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-200 px-4 md:px-10 py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h1 className="text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-gray-600 mt-3">
          Have a question, suggestion, or feedback? We’d love to hear from you
          at <span className="font-semibold">LocalDelish</span>.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <FaEnvelope size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-sm text-gray-600">support@localdelish.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <FaPhoneAlt size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-sm text-gray-600">+880 1XXX-XXXXXX</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <FaMapMarkerAlt size={22} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Location</h3>
              <p className="text-sm text-gray-600">Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Send Us a Message
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
