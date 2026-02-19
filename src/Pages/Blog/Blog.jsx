import React, { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Blog = () => {
  const [BlogData, setBlogData] = useState([]);

  useEffect(() => {
    const fethData = async () => {
      try {
        const response = await fetch("/public/blogData.json");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fethData();
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-2xl text-secondary font-semibold">Blog Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {BlogData?.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
