import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  

  return (
    <div className="container mx-auto p-6">
      <nav className="mb-4 font-skeina 12px">
        <Link to="/">Home</Link> / <Link to="/category">Cheveux</Link> / {product.name}
      </nav>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 ">
          <img
            src={product.image.url}
            alt={product.name}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-6">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-500 mb-4">Category: {product.category}</p>
          <p className="text-3xl font-semibold mb-4">{product.price} د.م.</p>
          <p className="text-green-600 mb-4">IN STOCK</p>
          <div className="flex items-center mb-4">
            <button className="px-3 py-2 bg-gray-300">-</button>
            <input
              type="number"
              className="w-12 text-center mx-2"
              defaultValue="1"
            />
            <button className="px-3 py-2 bg-gray-300">+</button>
            <button className="bg-brown-500 text-white px-6 py-2 ml-4">
              ADD TO CART
            </button>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">
              {product.description}
            </p>
          </div>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
            <p className="text-gray-600">
              {product.additionalInformation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
