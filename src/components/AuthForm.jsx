import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  const [isLoginFormActive, setLoginFormActive] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const switchToLoginForm = () => {
    setLoginFormActive(true);
  };

  const switchToRegistrationForm = () => {
    setLoginFormActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoginFormActive) {
      // Login form submission
      try {
        const response = await axios.post('http://localhost:3000/login', { email, password });
        alert('Login successful');
        console.log(response.data);
      } catch (error) {
        console.error('Error logging in', error);
        setError('Login failed');
      }
    } else {
      // Registration form submission
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/register', { email, password });
        alert('Registration successful');
        console.log(response.data);
      } catch (error) {
        console.error('Error registering', error);
        setError('Registration failed');
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-lg">
      <div
        ref={formRef}
        style={{ animation: 'slideInFromLeft 1s ease-out' }}
        className="max-w-md w-full bg-gradient-to-r from-green-800 to-teal-600 rounded-xl shadow-2xl overflow-hidden p-8 space-y-8 relative"
      >
        <button
          className="absolute top-4 right-4 text-gray-200 hover:text-gray-400"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2
          style={{ animation: 'appear 2s ease-out' }}
          className="text-center text-4xl font-extrabold text-white"
        >
          {isLoginFormActive ? 'Login' : 'Register'}
        </h2>
        <p
          style={{ animation: 'appear 3s ease-out' }}
          className="text-center text-gray-200"
        >
          {isLoginFormActive ? 'Sign in to your account' : 'Sign up to get started'}
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              placeholder="john@example.com"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-teal-500"
              required
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-500 peer-focus:text-sm"
              htmlFor="email"
            >
              Email address
            </label>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-teal-500"
              required
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-500 peer-focus:text-sm"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          {!isLoginFormActive && (
            <div className="relative">
              <input
                placeholder="Confirm Password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-white bg-transparent placeholder-transparent focus:outline-none focus:border-teal-500"
                required
                id="confirm-password"
                name="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label
                className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-500 peer-focus:text-sm"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
            </div>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            className="w-full py-2 px-4 bg-teal-500 hover:bg-teal-700 rounded-md shadow-lg text-white font-semibold transition duration-200"
            type="submit"
          >
            {isLoginFormActive ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center text-gray-300">
          {isLoginFormActive ? "Don't have an account?" : "Already have an account?"}
          <button
            className="text-teal-300 hover:underline"
            onClick={isLoginFormActive ? switchToRegistrationForm : switchToLoginForm}
          >
            {isLoginFormActive ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
