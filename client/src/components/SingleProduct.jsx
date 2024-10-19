import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
     <div className="w-full mb-6 min-h-3 bg-[#000000] relative">
    <div className="w-full h-full 0 absolute flex flex-col justify-center items-center">
      <div className="flex justify-center font-skeina 10px text-lg mb-4">
        <Breadcrumb
          items={[
            {
              title: (
                <a href="/" className="[#000000] !hover:bg-transparent">
                  Home
                </a>
              ),
            },
            {
              title: <p className="!text-[#C6757D] !hover:bg-transparent">Boutique</p>,
            },
          ]}
        />
      </div>
      <h1 className="text-[#A1897A] text-5xl font-skeina ">Notre boutique</h1>

      <button className="text-black text-1xl mt-6 border border-gray-400 px-4 py-2 rounded">
  Cheuveux
</button>
    </div>
    <img
      src="/téléchargement.jfif"
      alt="Header Image"
      className="w-full h-96 object-cover shadow-md"
    />
  </div>
    {products.map(product => (
    <div key={product._id} className="relative w-70 h-70 bg-white p-6 shadow-md rounded-lg">
      <button className="bg-white p-2 absolute top-5  right-5 z-10 shadow-md rounded-full">
        <EyeOutlined className="text-gray-600" />
      </button>
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image.url}
          alt={product.name}
          className="w-full h-80 object-contain"
        />
      </Link>
      <div className="mt-4">
        <p className="text-[#A1897A]text-sm uppercase font-skeina 20.8px">{product.category}</p>
        <p className="font-semibold text-lg text-gray-800 font-skeina 20.8px">{product.name}</p>
        <p className="font-semibold text-lg text-gray-800 font-skeina 24px">{product.price} د.م.</p>
      </div>
    </div>
  ))}
  </div>

  );
};

export default SingleProduct;
