import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    number: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name: formData.firstName,
      email: formData.email,
      password: formData.password,
      number: formData.number
    };

    try {
      const response = await axios.post('http://localhost:3000/register', dataToSubmit);
      alert('User registered successfully: ' + response.data.message);
    } catch (error) {
      console.error(error);
      alert('Error registering user: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md bg-custom-pink p-12 rounded-lg border-4 bg-secondary shadow-md">
        <label htmlFor="firstName" className="bg-secondary text-2xl font-bold text-center mb-8">Register</label>
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="text"
          name="number"
          placeholder="Phone Number"
          required
          value={formData.number}
          onChange={handleChange}
        />
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="w-full h-10 mt-3 mb-2 text-black bg-secondary font-bold rounded cursor-pointer hover:bg-white transition-colors">Register</button>
        <p className="text-center text-black">
          Already have an account? <Link to="/auth/login" className="bg-[#a1897a] hover:underline hover:bg-white">Signin</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
