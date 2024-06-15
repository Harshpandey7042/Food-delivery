import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phone: '',
    age: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', formData);
      alert('Registration successful');
      onClose();
    } catch (error) {
      console.error('Error registering user', error);
      setError('Registration failed');
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-lg">
      <div className="max-w-md w-full bg-gradient-to-r from-blue-800 to-purple-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 relative">
        <button className="absolute top-4 right-4 text-gray-200 hover:text-gray-400" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-center text-4xl font-extrabold text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {['firstName', 'lastName', 'email', 'gender', 'phone', 'age', 'password'].map((field) => (
            <div className="relative" key={field}>
              <input
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-purple-500"
                required
                id={field}
                name={field}
                type={field === 'password' ? 'password' : field === 'age' ? 'number' : 'text'}
                value={formData[field]}
                onChange={handleChange}
              />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-purple-500 peer-focus:text-sm" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
