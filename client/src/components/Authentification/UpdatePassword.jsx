import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const [passwordData, setPasswordData] = useState({ email: '', oldPassword: '', newPassword: '' });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/update-password', passwordData);
      alert('Password updated successfully: ' + response.data.message);
      navigate('/'); // Redirect to home page after successful update
    } catch (error) {
      alert('Error updating password: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md bg-custom-pink p-12 rounded-lg border-4 bg-secondary">
        <label htmlFor="email" className="bg-secondary text-2xl font-bold text-center mb-8">Update Password</label>
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={passwordData.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="password"
          name="oldPassword"
          placeholder="Old Password"
          value={passwordData.oldPassword}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={passwordData.newPassword}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full h-10 mt-3 mb-2 text-black bg-secondary font-bold rounded cursor-pointer hover:bg-white transition-colors"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
