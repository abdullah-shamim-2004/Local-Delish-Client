import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // ✅ New X (Twitter) logo
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-2 py-4 mt-10">
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold  mb-3">
            🍴 Local<span className="text-primary">Delish</span>
          </h2>
          <p className="text-sm text-gray-400">
            Explore the best local restaurants, share reviews, and taste the
            authentic flavors of your city.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="https://www.facebook.com/" className="hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="https://x.com/" className="hover:text-primary">
              <FaXTwitter />
            </a>
            <a
              href="mailto:contact@localdelish.com"
              className="hover:text-primary"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div>
          <h6 className="footer-title text-primary">Explore</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/reviews" className="link link-hover">
            All Reviews
          </Link>
          <Link to="/add-review" className="link link-hover">
            Add Review
          </Link>
          <Link to="/favorites" className="link link-hover">
            My Favorites
          </Link>
           <Link to="/" className="link link-hover">
            Top Restaurants
          </Link>
        </div>

   
        <div>
          <h6 className="footer-title text-primary">Company</h6>
          <Link to="/about-us" className="link link-hover">
            About Us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/careers" className="link link-hover">
            Careers
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
        </div>

        <div>
          <h6 className="footer-title text-primary">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-5 pt-3 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} LocalDelish. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
