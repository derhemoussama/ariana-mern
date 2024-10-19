import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/forgot-password', { email });
      alert('Password reset link sent to your email.');
    } catch (error) {
      alert('Error sending reset link');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md bg-custom-pink p-12 rounded-lg border-4 bg-secondary">
        <label htmlFor="email" className="bg-secondary text-2xl font-bold text-center mb-8">Forgot Password</label>
        <input
          className="w-full h-10 bg-gray-200 p-2 mb-2 border-none rounded"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="w-full h-10 mt-3 mb-2 text-black bg-secondary font-bold rounded cursor-pointer hover:bg-white transition-colors">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
