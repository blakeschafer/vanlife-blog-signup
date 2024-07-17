// src/components/SignupForm.js
'use client';

import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setResponse('Signup successful!');
    } else {
      setResponse('Signup failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-800">
      <div className="max-w-md w-full bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-black">CodeHS Vanlife Blog</h1>
        <p className="text-center mb-8 text-black">I am driving around the country in a <a href='codehs.com'>CodeHS</a> sponsered van on a mission to promote computer science education in schools across America. Signup now to follow my journey via blog.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name:</label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email:</label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="comment">Tell me where to travel to:</label>
            <textarea
              className="mt-1 p-2 w-full border rounded-md"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-full p-2 bg-black text-white rounded-md hover:bg-gray-800"
            type="submit"
          >
            Notify Me
          </button>
        </form>
        {response && <div className="mt-4 text-green-500 text-center">{response}</div>}
      </div>
      <div className="mt-4">
        <h2 className="text-white">Follow</h2>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="codehs.com" className="text-white text-xl">🌐</a>
          <a href="#" className="text-white text-xl">🎥</a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
