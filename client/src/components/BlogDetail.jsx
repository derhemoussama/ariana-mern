import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { blogId } = useParams(); // Get the blog ID from the URL parameters
  const [blog, setBlog] = useState(null); // State to store blog data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blogs/${blogId}`);
        setBlog(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>No blog found</p>;

  return (
    <div className="container mx-auto p-6">
      <nav className="mb-4">
        <Link to="/">Home</Link> / <Link to="/blogs">Blogs</Link> / {blog.title}
      </nav>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={blog.image.url}
            alt={blog.title}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
          <p className="text-gray-500 mb-4">Date: {new Date(blog.date).toLocaleDateString()}</p>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-semibold mb-2">Content</h2>
            <p className="text-gray-600">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
