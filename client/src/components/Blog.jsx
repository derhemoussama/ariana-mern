import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Breadcrumb } from "antd";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs"); // Adjust URL as necessary
        setBlogs(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    
    <section className="flex flex-col items-center font-serif p-6 pt-0 bg-white">
  <div className="w-full mb-6"></div>

  {/* Image at the top of the section */}
  <div className="w-full mb-6 min-h-3 relative">
    <div className="w-full h-full bg-black/40 absolute flex flex-col justify-center items-center">
      <div className="flex justify-center font-skeina text-lg mb-4">
        <Breadcrumb
          items={[
            {
              title: (
                <a href="/" className="!text-white !hover:bg-transparent">
                  Home
                </a>
              ),
            },
            {
              title: <p className="!text-white !hover:bg-transparent">blog</p>,
            },
          ]}
        />
      </div>
      <h1 className="text-white text-5xl font-skeina ">Blog</h1>

      <h1 className="text-white text-1xl">Bienvenue dans notre Blog</h1>
    </div>
    <img
      src="/images/752777f380eb3b2ec36652646120cf4d.jpg"
      alt="Header Image"
      className="w-full h-96 object-cover shadow-md"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-xl">
    {blogs.map((blog) => (
      <div
        key={blog._id}
        className="flex flex-col bg-white shadow-md overflow-hidden"
      >
        <img
          alt={blog.title}
          className="w-full h-auto object-cover"
          src={blog.image.url}
        />
        <div className="p-4">
          <p className="text-gray-500 text-sm mb-2">
            Date: {new Date(blog.date).toLocaleDateString()}
          </p>
          <h1 className="text-base md:text-base font-bold text-gray-900 mb-2 relative">
            <Link
              to={`/blogs/${blog._id}`}
              className="hover:underline hover:text-black"
            >
              {blog.title}
            </Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 hover:w-full"></div>
          </h1>
          <div className="flex items-center text-sm text-[#000000]">
       <span className="font-skeina text-13px">By</span>&nbsp;Admin
    </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Blog;
